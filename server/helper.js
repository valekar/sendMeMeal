Meteor.publish('companiesList',function(){
    return Companies.find();
})

Meteor.publish('itemList',function(){
    return Items.find();
});

Meteor.publish('itemsForCurrentUser',function(userId){
    return Items.find({created_by:userId});
});
