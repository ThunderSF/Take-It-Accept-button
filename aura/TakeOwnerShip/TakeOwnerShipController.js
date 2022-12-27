({
	doInit : function(component, event, helper) {
       
        var recordid = component.get("v.recordId");
        if(recordid != undefined){
            console.log('**',recordid);
            var action = component.get("c.assignOwnership");
            action.setParams({
                "caseid": recordid
            });	 
            action.setCallback(this, function(response) {
                $A.get("e.force:closeQuickAction").fire();
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    type : "success",
                    title: "Success!",
                    message: "Assign Ownership successfully."
                });
                toastEvent.fire();
            });
            $A.enqueueAction(action);
            $A.get('e.force:refreshView').fire();
               
        }
        
    }
})