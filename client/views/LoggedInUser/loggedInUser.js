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



Template.mainLoggedInTemplate.events({
    'click #addFood':function(e,templ){
        //alert("clicked");
        console.log(this);
        Session.set("quantity"+this._id,Session.get("quantity"+this._id)+1);
        var price = this.price;
        var total_price = Session.get("quantity"+this._id) * price.toString();

        Session.set("item"+this._id,total_price);
    }
});


