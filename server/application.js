Meteor.publish('itemList',function(){
    return Item.find();
});