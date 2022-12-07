import { api, LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import custom from '@salesforce/schema/Car_Model__c';
import color from '@salesforce/schema/Car_Model__c.Color_Type__c';
import ctype from '@salesforce/schema/Car_Model__c.Colors__c';
import car from '@salesforce/schema/Car_Model__c.Select_Car__c';
import wheel from '@salesforce/schema/Car_Model__c.Wheel_Type__c';
import glassType from '@salesforce/schema/Car_Model__c.Window_Glass_Type__c';

export default class CarModelUi extends NavigationMixin(LightningElement) {
    objectcustom = custom;

    fields = [color,ctype,car,wheel,glassType];

    handleSubmit(){
        console.log("Submit");
    }

    handleBook(){
        this[NavigationMixin.Navigate]({  
            type: 'standard__navItemPage',  
            attributes: {  
            apiName: 'Car_Booking', 
            }  
       })

    }
}