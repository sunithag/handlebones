Application.OrderDetailsView = Application.View.extend({


    el: '.order',

    initialize : function(){
        this.options.cartCollection.on('change', this.render, this);
        this.options.cartCollection.on('remove', this.render, this);
    },

    render: function(){

        var subTotal = 0, i = 0, qty = 1, total = 0;

        for (; i < this.options.cartCollection.length ; i++) {
            qty = this.options.cartCollection.models[i].attributes.qty;
            subTotal  = subTotal + ((this.options.cartCollection.models[i].attributes.sellers[0].currentItemPrice) * qty);
        }
        total = subTotal + 64.95 + 175;

        this.options.cartCollection.models.subtotal =  (Math.round(subTotal * 100) / 100);
        this.options.cartCollection.models.total =  (Math.round(total * 100) / 100);

        var context = this.options.cartCollection ? this.options.cartCollection.models : {},
            output = this.options.template({items:context});
        this.$el.html(output);

    }



});