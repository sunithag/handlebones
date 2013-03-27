var productModel = Application.ProductModel;
Application.CartItemCollection = Backbone.Collection.extend({
    model: productModel,
    initialize: function(){

        //read from the storage or cookie

    }


});