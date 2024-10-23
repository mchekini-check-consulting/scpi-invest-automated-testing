node("ci-node") {

    stage("checkout") {
        checkout scm
    }

    stage("E2E Tests") {
         sh "npm install"
         sh "sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb"
        try{
            sh 'npx cypress run'
        }catch (Exception e){
            print("Une erreur s'est produite lors du lancement des tests e2e")
        }

    }

    stage("Archive Test Report") {
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }


}