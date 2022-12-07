public with sharing class wirecar {
    @AuraEnabled(Cacheable=true)
    public static List<Car_Model__c> getCars() {
        return [select Id,Name,Color_Type__c,Colors__c,Select_Car__r.Car_Image__c,Select_Car__r.Name from Car_Model__c order by Name desc ];

    }
}