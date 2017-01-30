class PersonalDetails{
    constructor(){}

    static getLastName(){
        return element(by.model("data.personal.constituentName.lastName"));
    }

    static setLastName(lastname){
        return PersonalDetails.getLastName().clear().sendKeys(lastname);
    }

    static getFirstName(){
        return element(by.model("data.personal.constituentName .ssrFirstNameNld"));
    }

    static setFirstName(firstname){
        return PersonalDetails.getFirstName().clear().sendKeys(firstname);
    }

    static getPreferredFirstName(){
        return element(by.model("data.personal.constituentName.prefFirstName"));
    }

    static setPreferredFirstName(preferredFirstName){
        return PersonalDetails.getPreferredFirstName().clear().sendKeys(preferredFirstName);
    }

    static getSexOptions(){
        return element.all(by.model("data.personal.personData.sex"));
    }

    static setFirstSexOption(){
        return PersonalDetails.getSexOptions().get(0).click();
    }

    static getDayOfBirthDate(){
        return element(by.model("data.personal.personData.birthdate.day"));
    }

    static setDayOfBirthDate(dayOfBirthDate){
        return PersonalDetails.getDayOfBirthDate().sendKeys(dayOfBirthDate);
    }

    static getMonthOfBirthDate(){
        return element(by.model("data.personal.personData.birthdate.month"));
    }

    static setMonthOfBirthDate(monthOfBirthDate){
        return PersonalDetails.getMonthOfBirthDate().sendKeys(monthOfBirthDate);
    }

    static getYearOfBirthDate(){
        return element(by.model("data.personal.personData.birthdate.year"));
    }

    static setYearOfBirthDate(yearOfBirthDate){
        PersonalDetails.getYearOfBirthDate().clear().sendKeys(yearOfBirthDate);
    }

    static getBirthPlace(){
        return element(by.model("data.personal.personData.birthplace"));
    }

    static setBirthPlace(birthPlace){
        PersonalDetails.getBirthPlace().clear().sendKeys(birthPlace);
    }

    static getPersonalPhoneType(){
        return element(by.model("data.personal.constituentContactData.perphone1.phoneType"));
    }

    static setPersonalPhoneType(personalPhoneType){
        return PersonalDetails.getPersonalPhoneType().sendKeys(personalPhoneType);
    }
}

module.exports = PersonalDetails;
