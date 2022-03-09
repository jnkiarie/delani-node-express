pipeline {
    agent any
    stages{
        stage('Docker Image')
        steps{
            docker { image 'node:16.13.1-alpine' }
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}