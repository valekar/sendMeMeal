
Router.route('/',function(){

    this.render('mainTemplate');

    this.render('headerTemplate',{to:'header'});
    this.render('footerTemplate',{to:'footer'});

    this.layout('ApplicationLayout');

});
