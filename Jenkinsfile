pipeline {

    //untuk define dimana mau dirun
    agent{
        node{
            label 'docker-chrome'
        }
    }

    //kumpulan task yang akan diassign di job tersebut
    //1. clone source code
    //2. install dependencies
    //3. run all test
    //4. generate report
    stages{
        stage('Install dependencies'){
            //semua task operation bisa ditulis disini
            sh "npm ci"
        }

        stage('Run Test'){
            sh "npm test"
        }

        stage('Generate Report'){
            sh "npm run reporter"
            sh "ls cypress/reports"
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: true, 
                    keepAll: true, 
                    reportDir: 'cypress/reports/', 
                    reportFiles: 'index.html', 
                    reportName: 'BDD Atlas MultiCucumber Reporter', 
                    reportTitles: ''
                ])
        }
    }

    //yang akan diexecute setelah semua stages
    //pilihan: always, failed, success
    post{
        always{
            echo "Ini adalah pasti"
        }
    }

}