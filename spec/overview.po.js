class OverviewPage{
    constructor(){}

    static clickFirstAvailableForm(){
        let deferred = protractor.promise.defer();
        element.all(by.css("button.loginButton")).first().click()
            .then(() => {
                browser.sleep(3000);
                deferred.fulfill(true);
            });
        return deferred.promise;
    }
}

module.exports = OverviewPage;