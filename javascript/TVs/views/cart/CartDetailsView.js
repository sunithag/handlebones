Application.CartDetailsView = Application.View.extend({

    el: '#cartOverlay',

    events: {
        'click .close': 'hidePanel',
        'click .co': 'showCartConfirmPage'

    },
    initialize : function(){
        this.options.cartCollection.on('change', this.render, this);
        this.options.cartCollection.on('remove', this.render, this);
        this.options.saveCollection.on('change', this.render, this);
        this.options.saveCollection.on('remove', this.render, this);

    },
    render: function(){

        var totalLen = this.options.cartCollection.length + this.options.saveCollection.length;
        var subTotal = 0, i = 0, qty = 1;

        for (; i < this.options.cartCollection.length ; i++) {
            qty = this.options.cartCollection.models[i].attributes.qty;
            subTotal  = subTotal + ((this.options.cartCollection.models[i].attributes.sellers[0].currentItemPrice) * qty);
        }

        this.model = ({
            len : totalLen,
            subtotal : (Math.round(subTotal * 100) / 100)
        });

        var context = this.model ? this.model : {},
            output = this.options.template({items:context});
        this.$el.html(output);
        var view = new Application.CartView({ template: Handlebars.templates['cart/cartItems'], cartCollection: this.options.cartCollection, saveCollection:this.options.saveCollection});
        view.render();

        var view = new Application.SaveView({ template: Handlebars.templates['cart/saveItems'], cartCollection: this.options.cartCollection, saveCollection:this.options.saveCollection});
        view.render();



    },
    hidePanel: function(event){
        this.$el.css("display","none");
    },

    showPanel: function(){
        $('#productOverlay').css("display","none");

        this.$el.css("display","block");
        window.scrollTo(0,0);
    },

    showCartConfirmPage: function(){
        console.log("show cart confirm page");
        this.hidePanel();
       AppRouter.navigate('#/cart', {trigger:true});


    }




});