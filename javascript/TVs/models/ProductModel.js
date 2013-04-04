

Application.ProductModel = Backbone.Model.extend({


    setID:function(id){
        this.id = id;
        this.url = 'http://localhost:8000/json/product/item-data/item-' + this.id +'.json';

    },
    setQty: function(qty){
        if(qty === 'default') qty = '1';
        this.attributes[0].qty = qty;
    },
    urlRoot:  this.url
});

