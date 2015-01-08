Template.mainLoggedInTemplate.helpers({
    'foodList':function(){
        // var ass = [{},{}];
        //return Food.find();

        var foodList = Food.find().fetch();
        for(var i=0;i<foodList.length;i++){
            var url = Uploads.find({_id:foodList[i].picture}).fetch()[0].url();
            var obj = {url:url,index:i};
            foodList[i] = $.extend(foodList[i],obj);

        }

        return foodList;
    },
    'quantity':function(){
        if(isNaN(Session.get("quantity"+this._id))){
            Session.set("quantity"+this._id,0);
        }
        return Session.get("quantity"+this._id);
    },
    itemAmount:function(){
        if(isNaN(Session.get("item"+this._id))){
            Session.set("item"+this._id,0);
        }
        return Session.get("item"+this._id);
    }
});

Template.mainLoggedInTemplate.rendered=function(){
    var item_ids = [];
    Session.set("item_ids",item_ids);
}

Template.mainLoggedInTemplate.events({
    'click #addFood':function(e,templ){
        //alert("clicked");
       // console.log(this);

        var item_ids = Session.get("item_ids");
      //  console.log(item_ids);
       // console.log(item_ids.length);
        if(item_ids.length<=0){
           insertItem(this);
        }
        else{
            var flagInsert = true;
            for(var i=0;i<item_ids.length;i++){

                if(Items.find({_id:item_ids[i].item_id}).fetch()[0].food_id === this._id){
                   console.log("update!!");
                    updateItem(this,item_ids[i]);
                    flagInsert = false;
                    break;
                }
            }
            if(flagInsert){
                insertItem(this);
            }
        }

    }
});


function insertItem(instance){
   // console.log("inside insert  function");

    /*get the food price*/
    var food_price = parseInt(instance.price);
    /*get the food_id*/
    var food_id = instance._id;
    var created_by = Meteor.userId();
    var attrs = {
        food_id:food_id,
        food_price:food_price,
        created_by:created_by
    };
    Meteor.call('addItem',attrs,function(err,result){
        if(result){
            var items_ids = Session.get("item_ids");
            var item_quantity = {};
            item_quantity = $.extend(item_quantity,{item_quantity:result.quantity, item_id:result._id});
            items_ids.push(item_quantity);
            Session.set("item_ids",items_ids);
            Session.set("quantity"+instance._id,result.quantity);
            var total_price = result.quantity * food_price;
            Session.set("item"+instance._id,total_price);
            console.log(Session.get("item_ids"));
        }else if(err){
            console.log(err);
        }
    });
}

function updateItem(instance,item_object){
  //  alert("Updating...");

    var attrs ={
        id:item_object.item_id,
        food_price:parseInt(instance.price),
        user_id:Meteor.userId()
    }

   Meteor.call('updateItem',attrs,function(err,result){
        if(err){
            console.log(err);
        }
        else {
            Session.set("quantity"+instance._id,result.quantity);
            Session.set("item"+instance._id,result.total_price);
            console.log(result);
        }
    });

}