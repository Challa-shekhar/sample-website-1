
pipeline {
    agent {
        label "master"
    }
    stages {
        stage("Git checkout"){
            steps{
                git credentialsId: 'git', url: 'https://github.com/Challa-shekhar/sample-website-1'
            }
        }
        stage("running npm install"){
            steps{
                sh "npm install"
            }
        }
        stage("PM2 setup"){
            steps{
                sh "npm install pm2"
            }
        }
        stage("start the website"){
            steps{
                sh  "nohup node server.js &"
            }
        }
    }
}

