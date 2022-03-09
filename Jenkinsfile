pipeline {
    agent any {docker { image 'node:16.13.1-alpine' }}
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}