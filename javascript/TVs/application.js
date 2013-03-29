window.Application = {};

/* views */
Application.View = Backbone.View.extend({


    render: function() {
        var context = this.model ? this.model.attributes : {},

            output = this.options.template(context);
        this.$el.html(output);


    }
});



/* routers */
Application.router = Backbone.Router.extend({
    routes: {
        "": "home",
        "cart": "cartConfirm"
    }
})

Application.setData = function(data, key){

    localStorage.setItem(key, JSON.stringify(data));

}

var slider;

var range = [0,0];

/* Events extend */

Application.updateTVs = {};

_.extend(Application.updateTVs, Backbone.Events);


Application.updateTVs.on("change", function(collection) {

        this.collection = collection
        this.newArray = this.collection.originalModels;


        var type = $("#typeList :selected").text();
        var brand = $("#brandList :selected").text();
        var sort = $("#sortList :selected").text();
        var matches = $("#count");

        this.newArray= _.filter(this.newArray, function (item) {
            return (parseInt(item.get("size")) >= range[0] &&  parseInt(item.get("size")) <= range[1]);
        });

        this.newArray= _.filter(this.newArray, function (item) {
            return item.get("name").match(type) || type.match(/All/);
        });

        this.newArray= _.filter(this.newArray, function (item) {
            return item.get("name").match(brand) || brand.match(/All/);
        });

        this.newArray.sort(function(a,b) {
            return parseFloat(b.get("listPrice")) - parseFloat(a.get("listPrice"));
        });

       //improve it later..
        matches.html("");
        matches.html(this.newArray.length + " MATCHES ");
        $(".items").fadeOut(300);
        setTimeout($(".items").fadeIn(300), 300);
        $(".items").html("");

        this.collection.reset(this.newArray);



});





$(function() {

    var AppRouter = new Application.router;

    var cartCollection = new Application.CartItemCollection();

    //read items from the localstorage and assign them to cartCollection
    var storedCartData= JSON.parse(localStorage.getItem('cartWM'));
    if(storedCartData != null)
        cartCollection.add(storedCartData, {silent: true});



    AppRouter.on('route:home', function() {

        var view = new Application.TVFinderView({cartCollection:cartCollection});

    })

    //actually Route is not needed for overlay - only different state of the page
  /*  AppRouter.on('route:productDetail', function(id) {

        var view = new Application.productDetailsView({ template: Handlebars.templates['productPanel'], id:id, cartCollection:cartCollection});
        view.render({id: id});
    })
    */

    Backbone.history.start();


});
