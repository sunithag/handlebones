Application.productDetailsView = Application.View.extend({

    el: '#productOverlay',

    events: {

        'click .close': 'hideOverlay',
        'click #cart': 'updateCart'

    },

    updateCart : function(event) {

        console.log("in about view ");

        //TODO: create GUID for the id
        var key = 'cartWM';


        this.options.cartCollection.add(this.product.attributes[0], {silent: true});
        Application.setData (this.options.cartCollection.models, key);

        //close the product panel
        this.$el.css("display","none");

        //create a view instance and render
        var model = new Backbone.Model({items:this.options.cartCollection.models});
        var view = new Application.CartDetailsView({ template: Handlebars.templates['cartPanel'], model: model});
        view.render();

        //open the cart panel
        var panel = $("#cartOverlay" );
        panel.css("display","block");
        window.scrollTo(0,0);

    },

    addItem: function(){
        _.each(this.options.cartCollection , function (item) {
            console.log("add this item to the storage");
        }, this);
    },

    render: function (options) {
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

    hideOverlay: function(event){
        this.$el.css("display","none");
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

        var model = new Backbone.Model({rrs:reviews});
        var view = new Application.RRView({ template: Handlebars.templates['product/reviews'], model: model });
        view.render();

        var model = new Backbone.Model({items:data.attributes[0]});
        var view = new Application.DetailsView ({ template: Handlebars.templates['product/productdetails'], model: model });
        view.render();

        $('#carImgs').wmCarousel({ duration:500});
        $('#carRRs').wmCarousel({ duration:500});


        var panel = $("#productOverlay" );
        panel.css("display","block");
        window.scrollTo(0,0);


    }




});