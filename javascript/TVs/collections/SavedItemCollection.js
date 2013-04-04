var productModel = Application.ProductModel;
Application.SavedItemCollection = Backbone.Collection.extend({
    model: productModel,
    localStorage: new Backbone.LocalStorage("saveWM")


});