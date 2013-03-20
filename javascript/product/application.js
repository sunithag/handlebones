window.Application = {};

Application.View = Backbone.View.extend({
    render: function() {
        var context = this.model ? this.model.attributes : {},
            output = this.options.template(context);
        this.$el.html(output);
    }
});

Application.getParameter = function(sParam){

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }

}

Application.setData = function(data, key){

    sessionStorage.setItem(key, JSON.stringify(data));

}


$(function() {

    var itemid = Application.getParameter('itemid');
    itemid = itemid.substr(0, itemid.lastIndexOf('/'));

    var storedData = JSON.parse(sessionStorage.getItem('itemid -'+ itemid));

    var storedTvs = JSON.parse(sessionStorage.getItem('wmtTVs'));
    //var url = 'http://aguevara-linux.corp.walmart.com/search/catalog/itemIds.ems?itemids=' + itemid;
    var url =  'http://localhost:8000/json/product/item-data/item-'+itemid+'.json';

    if ( storedData !== null) {
        processData(storedData);
        console.log("storedData: " + storedData);
    }else{

        $.ajax ({ type: "get", async: false, url: url, dataType: "json", success: processData });
    }

    if(storedTvs == null){
        $.ajax ({ type: "get", async: false, url: 'http://localhost:8000/json/tvs/tvs.json', dataType: "json", success: processTVData });

    }




   function processData(data){
       var key = 'itemid -'+ itemid;

        Application.setData(data, key);

        var updateProduct = {};

       _.extend(updateProduct, Backbone.Events);

        updateProduct.on("setup", function(id) {
           console.log("in updateProduct.setup");
            $(id).wmCarousel({ duration:100});
        });

        /**
         * Product info view
         *
         */
        var model = new Backbone.Model({items:data});

        var productInfoView = Backbone.View.extend({


            event: function() {
                console.log("in rendered")

            },

            render: function() {
                var context = this.model ? this.model.attributes : {},
                    output = this.options.template(context);
                this.$el.html(output);
                console.log("in render")
            },
            initialize : function(){
                // this.listenTo(this.model, "change", this.render);
            }
        });

        var view = new productInfoView({ template: Handlebars.templates['product/prodinfo'], model: model });

        view.render();

        $('.prodinfo').append(view.el);



        /**
         * Product Image Carousel View
         *
         */

        var model = new Backbone.Model({items:data[0].alternateImageData});

        var productImageCarouselView = Backbone.View.extend({

            //id: 'pdimages',
            event: function() {
                console.log("in rendered")

            },

            render: function() {
                var context = this.model ? this.model.attributes : {},
                    output = this.options.template(context);
                this.$el.html(output);
                console.log("in render")
            },
            initialize : function(){
                // this.listenTo(this.model, "change", this.render);
            }
        });

        var view = new productImageCarouselView({ template: Handlebars.templates['product/productimages'], model: model });

        view.render();

        $('#pdimages').append(view.el);

        updateProduct.trigger('setup', '#carImgs');


        /**
         * about Product - view
         *
         */
        var model = new Backbone.Model({items:data});

        var productaboutView = Backbone.View.extend({


            event: function() {
                console.log("in rendered")

            },

            render: function() {
                var context = this.model ? this.model.attributes : {},
                    output = this.options.template(context);
                this.$el.html(output);
                console.log("in render")
            },
            initialize : function(){
                // this.listenTo(this.model, "change", this.render);
            }
        });

        var view = new productaboutView({ template: Handlebars.templates['product/about'], model: model });

        view.render();

        $('.about').append(view.el);






        /**
         * Reviews and ratings View
         *
         */
        //Rating and Reviews - only processing first 5 reviews.
        var model = new Backbone.Model({rrs:reviews});

        var productRRView = Backbone.View.extend({

            //class: 'pdreviews',

            render: function() {
                var context = this.model ? this.model.attributes : {},
                    output = this.options.template(context);
                this.$el.html(output);
            },
            initialize : function(){
                // this.listenTo(this.model, "change", this.render);
            }
        });
        var view = new productRRView({ template: Handlebars.templates['product/reviews'], model: model });
        view.render();

        $('.pdreviews').append(view.el);
        updateProduct.trigger('setup', '#carRRs');



       /**
        * Product Details View
        *
        */

       //var itemAttributes = $(data[0].itemAttributes).splice($(data[0].itemAttributes).length - 5)

       var model = new Backbone.Model({items:data});

       var productDetailsView = Backbone.View.extend({

           //class: 'pdetails',

           render: function() {
               var context = this.model ? this.model.attributes : {},
                   output = this.options.template(context);
               this.$el.html(output);
           },
           initialize : function(){
               // this.listenTo(this.model, "change", this.render);
           }
       });
       var view = new productDetailsView ({ template: Handlebars.templates['product/productdetails'], model: model });
       view.render();

       $('.pdetails').append(view.el);


    }

    function processTVData(data){
        console.log("processing TV Data");
        Application.setData(data, "wmtTVs");

        /**
         * People viewed also view
         *
         */
        var newArray = $(data).splice(97);

        /*
         _.contains(data, value)
        });*/

        var model = new Backbone.Model({items:newArray});

        var productRelevanceCarouselView = Backbone.View.extend({

            //id: 'relevance',

            render: function() {
                var context = this.model ? this.model.attributes : {},
                    output = this.options.template(context);
                this.$el.html(output);
            },
            initialize : function(){
                // this.listenTo(this.model, "change", this.render);
            }
        });
        var view = new productRelevanceCarouselView({ template: Handlebars.templates['product/viewedalso'], model: model });
        view.render();

        $('.items').append(view.el);


    }





});
