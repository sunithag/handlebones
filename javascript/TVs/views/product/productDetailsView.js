Application.productDetailsView = Application.View.extend({

    el: '#productOverlay',

    events: {

        'click .close': 'hidePanel',
        'click .cartbtn': 'updateCart'

    },

    updateCart : function(event) {

        console.log("event.currentTarget.id: " + event.currentTarget.id);
        console.log("product: " + this.product.id);

        //event bindings of all previously displayed views have not been removed and they are kept in memory and this event is
        // getting triggered for all the previously displayed views also, so check if it is a currentTarget so we don't add
        //the items that were removed from the cart.
        // http://stackoverflow.com/questions/7567404/backbone-js-repopulate-or-recreate-the-view
        //I think creating singleton view will solve the issue or kill the views- I think first solution might be better.
        if(this.product.id === event.currentTarget.id){
            console.log("adding this item to the cart: " + this.product.id);
            //qty = $("#qty").val();
            //this.model = ({Qty: qty});
            this.product.setQty($("#qty").val());
            this.options.cartCollection.create(this.product.attributes[0]);
            //TODO: create only one instance of this view - want to do this in local scope.
            var view = new Application.CartDetailsView({ template: Handlebars.templates['cart/cartPanel'], cartCollection: this.options.cartCollection, saveCollection:this.options.saveCollection});
            view.render();
            this.hidePanel();
            view.showPanel();

        }

    },

    render: function (options) {
        console.log(" current item id in the product panel: " + this.options.id)
        var that = this;
        var context = this.model ? this.model.attributes : {},
            output = this.options.template(context);
        this.$el.html(output);
        that.product = new Application.ProductModel({id: this.options.id});
        this.product.setID(this.options.id);
        that.product.fetch({
                success: function (data) {
                    that.onDataHandler(data);
                }
        })

    },

    hidePanel: function(event){
        this.$el.css("display","none");
      /*  _.each(this.bindings, function (binding) {
            binding.model.unbind(binding.ev, binding.callback);
        });
        this.bindings = []; // Will unbind all events this view has bound to
        this.unbind();        // This will unbind all listeners to events from
        // this view. This is probably not necessary
        // because this view will be garbage collected.
        this.remove();*/
    },

    showPanel: function(){
        $('#cartOverlay').css("display","none");
        this.$el.css("display","block");
        window.scrollTo(0,0);
    },

    onDataHandler: function(data){

        var model = new Backbone.Model({items:data.attributes[0]});
        var view = new Application.InfoView({ template: Handlebars.templates['product/prodinfo'], model: model });
        view.render();

        var model = new Backbone.Model({items:data.attributes[0].alternateImageData});
        var view = new Application.ImageCarouselView({ template: Handlebars.templates['product/productimages'], model: model });
        view.render();

        var model = new Backbone.Model({items:data.attributes[0]});
        var view = new Application.AboutView({ template: Handlebars.templates['product/about'], model: model });
        view.render();

        var model = new Backbone.Model({items:data.attributes[0]});
        var view = new Application.cartView ({ template: Handlebars.templates['product/cart'], model: model });
        view.render();

        var model = new Backbone.Model({rrs:reviews});
        var view = new Application.RRView({ template: Handlebars.templates['product/reviews'], model: model });
        view.render();

        var model = new Backbone.Model({items:data.attributes[0]});
        var view = new Application.DetailsView ({ template: Handlebars.templates['product/productdetails'], model: model });
        view.render();

        $('#carImgs').wmCarousel({ duration:500});
        $('#carRRs').wmCarousel({ duration:500});

    }




});