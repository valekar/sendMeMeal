

Template.mainLoggedInTemplate.rendered=function(){
    if(Meteor.userId() === Houston._admins.find({user_id:Meteor.userId()}).fetch()[0].user_id){
        Session.set("isAdmin",true);
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