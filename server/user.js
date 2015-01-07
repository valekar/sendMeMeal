Meteor.publish('adminUser',function(userId){
   return Houston._admins.find({user_id:userId});
});


Meteor.methods({
   addUser:function(attrs){

       var password = Math.floor(Math.random()*90000) + 10000;


       twilio = Twilio("ACd9a8f0183a747cd753b1e3532581455d", "7f192048e68ed4cf0fe22ee63f2416a3");
       twilio.sendSms({
           to:'+91'+attrs.phoneNumber, // Any number Twilio can deliver to

           from: '+919901336755', // A number you bought from Twilio and can use for outbound communication
           body: 'bitch. plsss '+ password+" have fun" // body of the SMS message
       }, function(err, responseData) {

           console.log('+91'+attrs.phoneNumber + "password :: "+password);

        //this function is executed when a response is received from Twilio
           if (!err) {
               console.log('+91'+attrs.phoneNumber + "password :: "+password);

           // "err" is an error received during the request, if any
               // "responseData" is a JavaScript object containing data received from Twilio.
               // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
               // http://www.twilio.com/docs/api/rest/sending-sms#example-1
               console.log(responseData.from); // outputs "+14506667788"
               console.log(responseData.body); // outputs "word to your mother."
           }
       });


       var userObject = {
           'username':attrs.phoneNumber,
           'password':password+"",

           'profile':{
               'email':attrs.email,
               'personalName':attrs.name,
               'company_id':attrs.company
           }
       }


       console.log(userObject);


        check(userObject,{
            username:String,
            password:String,
            profile:{
                email:String,
                personalName:String,
                company_id:String
            }

        });

       var user_id = Accounts.createUser(
            userObject

       );

       return user_id;


   }

});