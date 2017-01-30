class StartOfProgramPage {
    constructor(){}

    static clickNextStepButton(){
        let deferred = protractor.promise.defer();
        element.all(by.css("section.active button.next")).click()
            .then(() => {
                browser.sleep(3000);
                deferred.fulfill(true);
            });
        return deferred.promise;
    }
}

module.exports = StartOfProgramPage;
