Meteor.publish('companiesList',function(){
    return Companies.find();
})

Meteor.publish('itemList',function(){
    return Items.find();
});
