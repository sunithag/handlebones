Application.TVFinderView = Application.View.extend({

    initialize:function() {

       var that = this;


       that.collection = new Application.TVFinderCollection();

       that.collection.fetch({
            success : function(){
                console.log("fetch success");
                that.render();
            }
        });


    },



    render: function(){

        this.collection.originalModels = _.clone(this.collection.models);


        var view = new Application.ItemsView({ template: Handlebars.templates['items'],   collection:this.collection, cartCollection:this.options.cartCollection});
        view.render();

        var view = new Application.FilterView({ template: Handlebars.templates['filters'], collection: this.collection });
        view.render();

        var view = new Application.SummaryView({ template: Handlebars.templates['summary'], collection: this.collection});
        view.render();

        var view = new Application.SliderView({ template: Handlebars.templates['slider'], collection: this.collection});
        view.render();
    }

 });
