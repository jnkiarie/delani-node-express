pipeline{
    agent any
    tools{
        nodejs 'Node 12'
    }
    stages{
        stage('Clone Repository'){
            steps{ 
                git 'https://github.com/jnkiarie/delani-node-express.git'
            }
        }
        stage('Install Dependencies / Build'){
            steps{
                sh 'npm install'
            }
        }
    }
}
