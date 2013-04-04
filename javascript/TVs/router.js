/* routers */
Application.router = Backbone.Router.extend({
    routes: {
        "": "home",
        "cart": "cartConfirm"
    }
})




var AppRouter = new Application.router;


AppRouter.on('route:home', function() {

    var view = new Application.TVFinderView({  template: Handlebars.templates['TVF/page']});

})

AppRouter.on('route:cartConfirm', function() {

    var view = new Application.CartConfirmView({  template: Handlebars.templates['cart/page']});

})

Backbone.history.start(
);