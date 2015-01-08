Meteor.methods({
   addItem:function(attrs){

       //check(attrs.quantity,Number);
       check(attrs.food_id,String);
       check(attrs.food_price,Number);
       check(attrs.created_by,String);
       //check(attrs.item_sum_price,Number);
      // console.log(attrs);

    var total_price = parseInt(1*attrs.food_price);

     var id =  Items.insert({
           quantity:1,
           food_id:attrs.food_id,
           food_price:attrs.food_price,
           created_by:attrs.created_by,
           item_sum_price:total_price
       });
       return {
           _id: id,
           quantity:1

       };
   },
    updateItem:function(attrs){
        check(attrs.id,String);
        check(attrs.food_price,Number);
        check(attrs.user_id,String);
        //console.log(attrs);

        var updated_quantity= Items.find({_id:attrs.id,created_by:attrs.user_id}).fetch()[0].quantity;
            updated_quantity +=1;
            console.log()

          var total_price = updated_quantity*attrs.food_price;
           // console.log(total_price);
       Items.update(
            {
                _id:attrs.id,
                created_by:attrs.user_id
            },
            {$set:
                {
                 item_sum_price:total_price,
                 quantity:updated_quantity
                }
            }
         );
        return {
            _id:attrs.id,
            quantity:updated_quantity,
            total_price:total_price
        }
    }
});


Meteor.publish('getItem',function(item_id){
    return Items.find({_id:item_id});
})