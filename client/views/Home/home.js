


//Template registerTemplate
Template.registerTemplate.helpers({
    'listCompanies':function(){
        return Companies.find().fetch();
    }
});

//RegisterTemplate Events handlers
Template.registerTemplate.events({
    'click #createUser':function(event,templ){
        event.preventDefault();
       var attrs = {
           email:$('#email').val(),
           name:$('#name').val(),
           phoneNumber :$('#phoneNumber').val().trim(),
           company:$('#selectCompany').val()

       };


        //alert("values " + email + name + phoneNumber + company);
       //
       Meteor.call('addUser',attrs,function(err,result){
            if(err){
                alert("sumthing went wrong " +err.reason);
            }
           else if(result){
                console.log(result);
               // alert(result);
                Router.go('/profile');
            }
        });



    }
});


//forgotTemplate Events handlers
Template.forgotTemplate.events({

    'click #forgot_password':function(event,t){
        event.preventDefault();
    }


});


//loginTemplate Events handlers
Template.loginTemplate.events({
    'click #userLogin':function(e,templ){
        e.preventDefault();
        var phoneNumber = $("#loginPhone").val();
        var password = $("#loginPassword").val();
       Meteor.loginWithPassword(phoneNumber,password,function(err){
            if(err){
                alert("Error :: " + err);
            }

        });




    }

});



