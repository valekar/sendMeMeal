Meteor.methods({
   addItem:function(attrs){

       //check(attrs.quantity,Number);
       check(attrs.food_id,String);
       //check(attrs.food_price,Number);
       check(attrs.created_by,String);
       //check(attrs.item_sum_price,Number);
     // console.log(attrs);
       var foodObj = Food.find({_id:attrs.food_id}).fetch()[0];

        var total_price = parseInt(1*foodObj.price);

     var id =  Items.insert({
           item_quantity:1,
           created_by:attrs.created_by,
            item_ordered:false,
           item_sum_price:total_price,
            food:{
                id:attrs.food_id,
                price:foodObj.price,
                name:foodObj.name
            }
       });
       return {
           _id: id,
           quantity:1

       };
   },
    updateItem:function(attrs){
        check(attrs.id,String);
      //  check(attrs.food_price,Number);
        check(attrs.user_id,String);
        //console.log(attrs);
        var itemObj = Items.find({_id:attrs.id,created_by:attrs.user_id}).fetch()[0];
        var updated_quantity= itemObj.item_quantity;
        var food_price = itemObj.food.price;

        updated_quantity +=1;
        var total_price = updated_quantity*food_price;
           // console.log(total_price);
       Items.update(
            {
                _id:attrs.id,
                created_by:attrs.user_id
            },
            {$set:
                {
                 item_sum_price:total_price,
                 item_quantity:updated_quantity
                }
            }
         );
        return {
            _id:attrs.id,
            quantity:updated_quantity,
            total_price:total_price
        }
    },
    reduceItem:function(attrs){
        check(attrs.id,String);
        var itemObj = Items.find({_id:attrs.id}).fetch()[0];

        var quantity = itemObj.item_quantity;
        if(quantity!=0){
            quantity -= 1;
        }

        var total_price = quantity* parseInt(itemObj.food.price);

        Items.update({
           _id:attrs.id
            },
            {$set:{
                item_sum_price:total_price,
                item_quantity:quantity
            }

            }
        );

        return {
            _id:attrs.id,
            quantity:quantity,
            total_price:total_price
        }

    }
});


Meteor.publish('getItem',function(item_id){
    return Items.find({_id:item_id});
})