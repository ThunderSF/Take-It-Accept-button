public without Sharing class TakeOwnership_Class {
    @AuraEnabled
    public static void assignOwnership(String caseid){
       
            Id userid= UserInfo.getUserId();
            Case c =[Select id,Status,OwnerId from Case Where Id=:caseid];
            if(string.valueOf(c.OwnerId).startswith('00G') || c.OwnerId != userid){
                c.OwnerId = userid;
                c.Status ='Open';
            }
            update c;
        
        
    }

}