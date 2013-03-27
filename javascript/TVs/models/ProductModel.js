

Application.ProductModel = Backbone.Model.extend({


    setID:function(id){
        this.id = id;
        this.url = 'http://localhost:8000/json/product/item-data/item-' + this.id +'.json';

    },
    urlRoot:  this.url
});

