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
})