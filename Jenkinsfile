node("ci-node") {

    stage("checkout") {
        checkout scm
    }

    stage("E2E Tests") {
         sh "npm install"
        sh "sudo apt-get update"
        sh "sudo apt-get install libgtk2.0-0t64 libgtk-3-0t64 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb -y"
        try{
            sh 'npm run test'
        }catch (Exception e){
            print("Une erreur s'est produite lors du lancement des tests e2e")
        }

    }

    stage("Archive Test Report") {
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }


}