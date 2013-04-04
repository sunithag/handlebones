Application.CartConfirmView = Application.View.extend({
    el: '.page',

    initialize:function() {

        var that = this;

        this.cartCollection = new Application.CartItemCollection();
        this.cartCollection.fetch();

        this.saveCollection = new Application.SavedItemCollection();
        this.saveCollection.fetch();

        if(this.cartCollection != null || this.saveCollection != null){
            var cartView = new Application.CartDetailsView({  template: Handlebars.templates['cart/cartPanel'], cartCollection: this.cartCollection, saveCollection: this.saveCollection});
            cartView.render();
        }

        this.$el.html(this.options.template({}));

        that.render();


    },


    render: function(){

        var view = new Application.HeaderCartView({ template: Handlebars.templates['common/headerCart'], cartCollection:this.cartCollection, saveCollection:this.saveCollection});
        view.render();

        var view = new Application.BreadCrumbView({ template: Handlebars.templates['common/breadcrumb'], model:CartBreadCrumbModel});
        view.render();

        var view = new Application.OrderDetailsView({ template: Handlebars.templates['cart/orderDetails'],cartCollection:this.cartCollection});
        view.render();

    }

});