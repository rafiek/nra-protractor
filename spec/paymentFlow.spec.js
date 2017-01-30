"use strict";

let LoginPage = require("./login.po");
let OverviewPage = require("./overview.po");
let StartOfProgramPage = require("./startofprogram.po");
let PersonalDetailsPage = require("./personalDetails.po");
let Config = require("./paymentFlowConfig");

describe('Payment', function(){
    browser.get(Config.programStartURL);

    it('should be able to choose to log in as an existing user', () => {
        element.all(by.css("button.loginButton")).last().click();

        expect(browser.getTitle()).not.toContain("start");
    });

    it('should log in an existing user', () => {
        LoginPage.setUserName(Config.username);
        LoginPage.setPassword(Config.password);
        LoginPage.clickLoginButton();

        expect(browser.getTitle()).not.toContain("login");
    });

    it('should choose the first available form', () => {
        OverviewPage.clickFirstAvailableForm();

        expect(browser.getTitle()).not.toContain("overview");
        expect(element(by.css("button[translate=START_OF_PROGRAM_DATA].section.active")).isPresent()).toBeTruthy();
    });

    it('should be able to go to personal section step', () => {
        StartOfProgramPage.clickNextStepButton();

        expect(element(by.css("button[translate=PERSONAL_DATA].section.active")).isPresent()).toBeTruthy();
    });

    it('should be able to fill in the personal section', function(){
        PersonalDetailsPage.setLastName("Putin");
        PersonalDetailsPage.setFirstName("Vladimir");
        PersonalDetailsPage.setPreferredFirstName("Vladie");
        PersonalDetailsPage.setFirstSexOption();
        PersonalDetailsPage.setDayOfBirthDate("1");
        PersonalDetailsPage.setMonthOfBirthDate("a");
        PersonalDetailsPage.setYearOfBirthDate("1950");
        PersonalDetailsPage.setBirthPlace("Amsterdam");
        PersonalDetailsPage.setPersonalPhoneType("L");


        element(by.model("data.personal.constituentContactData.perphone1.phone")).clear().then(function(){
            element(by.model("data.personal.constituentContactData.perphone1.phone")).sendKeys("666666666");
        });

    });

});