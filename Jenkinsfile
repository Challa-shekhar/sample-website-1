
pipeline{
    agent{
        label "master"
    }
    stages{
        stage("git checkout"){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'git', url: 'https://github.com/Challa-shekhar/sample-website-1']]])
            }

        }
        stage("npm build"){
            steps{
                sh "npm install"
            }
        }
    }
}

