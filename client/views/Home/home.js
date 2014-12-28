Template.headerTemplate.rendered = function(){
    $('ul.nav li.dropdown').hover(function(){
        $('#password').show();
        $('#forgot_password').show();
        $('.dropdown-menu',this).parent().addClass('open');
        $('.dropdown-menu',this).fadeIn('fast');

    },function(){
        $('.dropdown-menu',this).fadeOut('fast');
        $('.dropdown-menu',this).parent().removeClass('open');
    });

    $('ul.nav li.dropdown').click(function(){
        $('#password').show();
        $('#forgot_password').show();
        $('.dropdown-menu',this).fadeIn('fast');
    });



};




Template.headerTemplate.events({
    'click #forgot_password':function(event,templ){
        $('#password').hide();
        $('#forgot_password').hide();

    }
})


Meteor.subscribe('itemList');