/*
Meteor.startup(function(){
    Meteor.subscribe('foodList');
})
*/


Template.mainGuestTemplate.helpers({
    'foodList':function(){
       // var ass = [{},{}];
        //return Food.find();

        var foodList = Food.find().fetch();
        for(var i=0;i<foodList.length;i++){
                var url = Uploads.find({_id:foodList[i].picture}).fetch()[0].url();
                var obj = {url:url};
            foodList[i] = $.extend(foodList[i],obj);
        }


      /*  for(var i =0;i<ass.length;i++){
            ass[i] = $.extend(ass[i],{"name":"Srini"});
        }
*/
        //var obj = {};
        //var ass2 = _extend(obj,{name:"PV"});

        return foodList;
    }
});