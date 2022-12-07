import { LightningElement, wire,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { getRecord } from 'lightning/uiRecordApi';
import getCars from '@salesforce/apex/wirecar.getCars'


export default class Displaycars extends NavigationMixin(LightningElement) {
   isLoading = false;
    handleLoading(){
        this.Loading=true;
    }
    
    @api horizontalAlign = 'space';

    @wire(getCars)
    cars;

    @wire(getCars) CarsFunction({data,error}){
        if (data){
            console.log(data);
            
        }else {
            console.log(error);
        }    
    }

    // testpass(){
    //     this[NavigationMixin.Navigate]({  
    //         type: 'standard__navItemPage',  
    //         attributes: {  
    //             apiName: 'PassBook', 
    //         }  
    //    }) 
    //  }

BookCar(){
    this[NavigationMixin.Navigate]({  
                 type: 'standard__navItemPage',  
                 attributes: {  
                 apiName: 'Car_Booking', 
                 }  
            })
}

ViewCar(event){
    const rID = event.target.id.split('-')[0]
    console.log(rID)
    this[NavigationMixin.Navigate]({  
        type: 'standard__recordPage',  
        attributes: {  
            recordId: rID,  
            objectApiName: 'Car_Model__c',  
            actionName: 'view'  
        }  
    })
}

EditCar(){
    this[NavigationMixin.Navigate]({  
        type: 'standard__navItemPage',  
        attributes: {  
        apiName: 'Create_Model', 
        }  
   })
}

    
}