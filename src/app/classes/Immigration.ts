export class ImmigrationData {
    id: number;
    FullName: string;
    dateofbirth: string;
    passportCountry: string;
    CurrentResidence: string;
    visaStatus: string;
    explainVisaStatus: string;
    holdQualification: boolean;
    listTypeOfQualification: string;
    englishProficiency: string;
    isCompleteEngishTest: boolean;
    doYouHaveOffer: boolean;

  
    constructor() {
      this.id = 0;
      this.FullName = '';
      this.dateofbirth = '';
      this.passportCountry = '';
      this.CurrentResidence = '';
      this.visaStatus = '';
      this.explainVisaStatus = '';
      this.holdQualification = false;
      this.listTypeOfQualification = '';
      this.englishProficiency = '';
      this.isCompleteEngishTest = false;
      this.doYouHaveOffer = false;
    }


    [element: string]: any;

    get(element: string) {
        return this[element];
    }
  }
  

  export class ImmigrationResponse{
    response:string = "";
  }