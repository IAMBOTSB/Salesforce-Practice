import { api, LightningElement, track } from 'lwc';

import custom from '@salesforce/schema/Car_Booking__c';
import name from '@salesforce/schema/Car_Booking__c.Car_Models__c';
// import rev from '@salesforce/schema/Car_Booking__c.Choose_Car__c';
import ind from '@salesforce/schema/Car_Booking__c.Name';
import rating from '@salesforce/schema/Car_Booking__c.Final_Price__c';
import acc from '@salesforce/schema/Car_Booking__c.Account__c';


export default class Createbooking extends LightningElement {
    objectcustom = custom;

    fields = [name,acc,ind,rating];

    handleSubmit(){
        console.log("Submit");
    }
}