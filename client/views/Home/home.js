//HeaderTemplate Renders
Template.headerGuestTemplate.rendered = function(){
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    if ($(window).width()>=640) {
        $('ul.nav li.dropdown').hover(function () {
            $('.dropdown-menu', this).parent().addClass('open');
            $('.dropdown-menu', this).fadeIn('fast');

        }, function () {
            $('.dropdown-menu', this).fadeOut('fast');
            $('.dropdown-menu', this).parent().removeClass('open');
        });
    }

    $('.selectpicker').selectpicker();
   // $('#register').parent().addClass('active');



    Session.set('myTemplate','registerTemplate');


};

//Template Header helpers
Template.headerGuestTemplate.helpers({
   'myTemplate':function(){

       return Session.get('myTemplate');
   }
});

//HeaderTemplate events
Template.headerGuestTemplate.events({

    //for showing registerTemplate
    'click #Register':function(e,templ){
        Session.set('myTemplate','registerTemplate');


    },
    //for showing loginTemplate
    'click #Login':function(e,templ){
        Session.set('myTemplate','loginTemplate');
    },
    //for shoing goegotTemplate
    'click #forgot_password':function(e,templ){
        Session.set('myTemplate','forgotTemplate');
    },
    //getting back to loginTemplate
    'click #Back':function(e,templ){
        e.preventDefault();
    Session.set('myTemplate','loginTemplate');
}

});





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


//Template forgotTemplate
Template.forgotTemplate.helpers({

});

//forgotTemplate Events handlers
Template.forgotTemplate.events({

    'click #forgot_password':function(event,t){
        event.preventDefault();
    }


});



//Template loginTemplate
Template.mainGuestTemplate.helpers({


});


Template.mainGuestTemplate.events({

})

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



