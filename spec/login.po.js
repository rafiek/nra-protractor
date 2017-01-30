class LoginPage {
    constructor(){}

    static setUserName(username){
        return element(by.model("username")).sendKeys(username);
    }

    static setPassword(password){
        return element(by.model("password")).sendKeys(password);
    }

    static clickLoginButton(){
        let deferred = protractor.promise.defer();
        element.all(by.tagName("button")).last().click()
            .then(() => {
                browser.sleep(3000);
                deferred.fulfill(true);
            });
        return deferred.promise;
    }
}

module.exports = LoginPage;



