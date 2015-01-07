Meteor.methods({
    "addFood":function(foodAttributes){
        // check(Meteor.userId(), String);
        check(foodAttributes, {
            foodName:String,
            image:String
        });
        // var user = Meteor.user();
        var food = _.extend(foodAttributes, {
            //createdBy:Meteor.userId(),
            timestamp:new Date()


        });
        var collectionId = Food.insert(food);
        return {
            _id: collectionId
        };
    }
});


Meteor.publish('foodList',function(){
   return Food.find();
});


//uploads are used only for food

Uploads.allow({
    insert:function(userId,doc){
        //console.log(userId);
        if(userId === Houston._admins.find().fetch()[0].user_id)
            return true;
        else
            return false;
    },
    update:function(userId,doc){
        console.log(userId);
        if(userId === Houston._admins.find().fetch()[0].user_id)
            return true;
        else
            return false;
    },
    remove:function(userId,doc){
        console.log(userId);
        if(userId === Houston._admins.find().fetch()[0].user_id)
            return true;
        else
            return false;
    },
    download:function(userId,doc){
        console.log(userId);

        return true;
    }
});

Meteor.publish('uploads',function(){
    return Uploads.find();
})
