<<<<<<< HEAD
pipeline{
    agent{
        label "slave01"
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
=======
pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/Challa-shekhar/sample-website-1'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm install'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
>>>>>>> 1ea4709884b309c520fa499af6b59854860c3f89
