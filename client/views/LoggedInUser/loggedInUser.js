//HeaderTemplate Renders

Meteor.subscribe('adminUser',Meteor.userId());

Meteor.subscribe('uploads');


Template.headerLoggedInTemplate.rendered = function(){
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



    //Session.set('myTemplate','registerTemplate');


};

//Template Header helpers
Template.headerLoggedInTemplate.helpers({
});

//HeaderTemplate events
Template.headerLoggedInTemplate.events({

    'click #logout':function(e,templ){
        Meteor.logout(function(error){
           if(error){
               alert("unable to logout");
           }

        });
    }


});


Template.mainLoggedInTemplate.rendered=function(){


    if(Houston._admins.find({user_id:Meteor.userId()}).fetch().length >0){

        if(Meteor.userId() === Houston._admins.find({user_id:Meteor.userId()}).fetch()[0].user_id){
            //alert("sholoololo" + Session.get('isAdmin'));
            Session.set("isAdmin",true);

    }


    }else{
        return Session.set("isAdmin",false);
    }
};


Template.mainLoggedInTemplate.helpers({
        isAdminUser:function(){
           return Session.get("isAdmin");
        },
        uploadss:function(){
            return Uploads.find().fetch();
        }
    }
);

Template.mainLoggedInTemplate.events({
    'click #uploadme':function(e,templ){
        //  var url = $('fileMe').val();

        var file = $('#fileMe')[0].files[0];
        if(file){
            console.log(file.name);
        }

        var fileObj = new FS.File(file);
        Uploads.insert(fileObj,function (err, fileObj) {

        });
    },
    'click input[type="radio"]':function(e,templ) {

        Session.set('photoId', '');
        Session.set('photoId', e.target.value);

    },
    'click #remove':function(e,templ){
        Uploads.remove({_id:Session.get('photoId')});
        Session.set('photoId','');
    }
});








