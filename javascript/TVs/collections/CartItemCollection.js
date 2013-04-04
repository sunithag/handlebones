var productModel = Application.ProductModel;
Application.CartItemCollection = Backbone.Collection.extend({
    model: productModel,
    localStorage: new Backbone.LocalStorage("cartWM")


});