Application.TVFinderView = Application.View.extend({
    el: '.page',

    initialize:function() {

       var that = this;

       that.collection = new Application.TVFinderCollection();


        this.cartCollection = new Application.CartItemCollection();
        this.cartCollection.fetch();

        this.saveCollection = new Application.SavedItemCollection();
        this.saveCollection.fetch();

        if(this.cartCollection != null || this.saveCollection != null){
            var cartView = new Application.CartDetailsView({  template: Handlebars.templates['cart/cartPanel'], cartCollection: this.cartCollection, saveCollection: this.saveCollection});
            cartView.render();
        }

        this.$el.html(this.options.template({}));

       that.collection.fetch({
            success : function(){
                console.log("fetch success");
                that.render();
            }
        });


    },


    render: function(){

        this.collection.originalModels = _.clone(this.collection.models);


        var view = new Application.HeaderCartView({ template: Handlebars.templates['common/headerCart'], cartCollection:this.cartCollection, saveCollection:this.saveCollection});
        view.render();


        var view = new Application.BreadCrumbView({ template: Handlebars.templates['common/breadcrumb'], model:TVFBreadCrumbModel});
        view.render();

        var view = new Application.POVView({ template: Handlebars.templates['TVF/pov']});
        view.render();

        var view = new Application.ItemsView({ template: Handlebars.templates['TVF/items'],   collection:this.collection, cartCollection:this.cartCollection, saveCollection:this.saveCollection});
        view.render();

        var view = new Application.FilterView({ template: Handlebars.templates['TVF/filters'], collection: this.collection });
        view.render();

        var view = new Application.SummaryView({ template: Handlebars.templates['TVF/summary'], collection: this.collection});
        view.render();

        var view = new Application.SliderView({ template: Handlebars.templates['TVF/slider'], collection: this.collection});
        view.render();
    }

 });
