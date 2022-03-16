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
        stage('Deploy Application to Heroku'){
            steps{
                withCredentials([usernameColonPassword(credentialsId: 'heroku-recap', variable: 'HEROKU_CREDENTIALS' )]){
             sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/delani-nodeexpress.git master'
            }
        }
    }
}
