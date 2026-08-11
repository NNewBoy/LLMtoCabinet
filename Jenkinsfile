pipeline {
    agent any

    environment {
        ACR_REGISTRY  = "crpi-v27gqzero2fjya51.cn-guangzhou.personal.cr.aliyuncs.com"
        ACR_NAMESPACE = "llmproject"
        IMAGE_TAG     = "${BUILD_NUMBER}-${GIT_COMMIT.take(7)}"
        K8S_NAMESPACE = "app"
    }

    stages {
        stage('拉取代码') {
            steps {
                checkout scm
            }
        }

        stage('构建并推送镜像') {
            parallel {
                stage('后端服务镜像') {
                    steps {
                        script {
                            docker.withRegistry("https://${ACR_REGISTRY}", 'aliyun-acr') {
                                def img = docker.build("${ACR_NAMESPACE}/backend_tocabinet:${IMAGE_TAG}",
                                    "--platform linux/amd64 -f backend/Dockerfile backend/")
                                img.push()
                                img.push('latest')
                            }
                        }
                    }
                }

                stage('前端服务镜像') {
                    steps {
                        script {
                            docker.withRegistry("https://${ACR_REGISTRY}", 'aliyun-acr') {
                                def img = docker.build("${ACR_NAMESPACE}/frontend_tocabinet:${IMAGE_TAG}",
                                    "--platform linux/amd64 -f frontend/Dockerfile frontend/")
                                img.push()
                                img.push('latest')
                            }
                        }
                    }
                }
            }
        }

        stage('更新 K8s Secret') {
            steps {
                withCredentials([
                    file(credentialsId: 'k8s-kubeconfig', variable: 'KUBECONFIG'),
                    string(credentialsId: 'opencode-api-key', variable: 'LLM_API_KEY'),
                ]) {
                    sh """
                        export KUBECONFIG=\$KUBECONFIG
                        kubectl create secret generic tocabinet-secret \\
                          --namespace=${K8S_NAMESPACE} \\
                          --from-literal=LLM_API_KEY=\$LLM_API_KEY \\
                          --from-literal=LLM_MODEL="glm-5.2" \\
                          --from-literal=LLM_BASE_URL="https://opencode.ai/zen/go/v1" \\
                          --from-literal=ENABLE_INTERFERENCE_CHECK="false" \\
                          --dry-run=client -o yaml | kubectl apply -f -
                    """
                }
            }
        }

        stage('部署到 K8s 集群') {
            steps {
                withCredentials([file(credentialsId: 'k8s-kubeconfig', variable: 'KUBECONFIG')]) {
                    sh """
                        export KUBECONFIG=\$KUBECONFIG
                        kubectl apply -f k8s/configmap.yaml
                        kubectl apply -f k8s/pvc.yaml
                        kubectl apply -f k8s/backend.yaml
                        kubectl apply -f k8s/celery-worker.yaml
                        kubectl apply -f k8s/frontend.yaml
                        kubectl set image deployment/backend-tocabinet backend-tocabinet=${ACR_REGISTRY}/${ACR_NAMESPACE}/backend_tocabinet:${IMAGE_TAG} -n ${K8S_NAMESPACE}
                        kubectl set image deployment/frontend-tocabinet frontend-tocabinet=${ACR_REGISTRY}/${ACR_NAMESPACE}/frontend_tocabinet:${IMAGE_TAG} -n ${K8S_NAMESPACE}
                        kubectl set image deployment/celery-worker-tocabinet worker=${ACR_REGISTRY}/${ACR_NAMESPACE}/backend_tocabinet:${IMAGE_TAG} -n ${K8S_NAMESPACE}
                        kubectl rollout status deployment/backend-tocabinet -n ${K8S_NAMESPACE}
                        kubectl rollout status deployment/frontend-tocabinet -n ${K8S_NAMESPACE}
                        kubectl rollout status deployment/celery-worker-tocabinet -n ${K8S_NAMESPACE}
                        kubectl apply -f k8s/ingress.yaml --validate=false || echo "⚠️ Ingress 应用失败，跳过"
                    """
                }
            }
        }
    }

    post {
        success { echo "✅ 部署成功，镜像标签：${IMAGE_TAG}" }
        failure { echo "❌ 部署失败，请查看构建日志" }
    }
}