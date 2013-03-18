

window.Application = {};

Application.View = Backbone.View.extend({
  render: function() {
    var context = this.model ? this.model.attributes : {},
        output = this.options.template(context);
    this.$el.html(output);
  }
});



$(function() {


   /*   var model = new Backbone.Model({
        greeting: 'Hello'
      });
      var indexView = new Application.View({
        template: Handlebars.templates['index'],
        model: model
      });
      indexView.render();

      $('.container').append(indexView.el);
      */



    $.getJSON('http://localhost:8000/json/tvs/tvs.json',null,function(data) {


       var updateTVs = {};

        _.extend(updateTVs, Backbone.Events);

        updateTVs.on("change", function(msg) {
            console.log("updateTVs.on - Tiggered");
            var type = $("#typeList :selected").text();
            var brand = $("#brandList :selected").text();
            var size;
            var sort = $("#sortList :selected").text();
            var matches = $("#count");


            this.newArray = data.filter(function(item){

                return (parseInt(item.size) >= range[0] && parseInt(item.size) <= range[1]);

            });

            this.newArray = this.newArray.filter(function(item){

                return (type.match(/All/) || item.name.match(type));
            });

            this.newArray = this.newArray.filter(function(item){
                return (brand.match(/All/) || item.name.match(brand));
            });

            this.newArray.sort(function(a,b) {
                return parseFloat(b.listPrice) - parseFloat(a.listPrice);
            });



            matches.html("");
            matches.html(this.newArray.length + " MATCHES ");
            $(".items").fadeOut(300);
            setTimeout($(".items").fadeIn(300), 300);
            $(".items").html("");

            //this.collection.reset(this.newArray);\


           var model = new Backbone.Model({items:this.newArray});
            var view = new itemsView({ template: Handlebars.templates['items'], model:model});
            view.render();

            $('.items').append(view.el);

        });

        updateTVs.on("setup", function(msg) {
            console.log("in setup");

            var range_min = 13, range_max=100;
            var self=this;

            slider = $("#size-slider").slider({ animate: false, range: true, min: 0, max: 100, values: [0, 0],
                slide: function (event, ui) {

                    if (ui.values[0] > ui.values[1])
                        return false;

                    $(this).find(".ui-slider-handle:eq(0)").attr("data-value", ui.values[0]);
                    $(this).find(".ui-slider-handle:eq(1)").attr("data-value", ui.values[1]);

                    range[0] = ui.values[0];
                    range[1] = ui.values[1];



                },
                stop: function( event, ui ) {
                    updateTVs.trigger('change','range changed');
                }

            });

            slider.bind("setvals", function (e, p) {
                $(this).slider("option", "values", p.values);
                $(this).slider("option", "slide").call($(this), null, p);
            });

            slider.trigger("setvals", { values: [50, 85] } );
            updateTVs.trigger('change','range changed');
        });
    var slider;
    var range = [0,0];

        //Items view
        var model = new Backbone.Model({items:data});
        var itemsView = Backbone.View.extend({
            //className: 'items',

               events:{

                    'click a' : 'productDetails'
                },

                render: function() {
                    var context = this.model ? this.model.attributes : {},
                    output = this.options.template(context);
                    this.$el.html(output);
                },
                initialize : function(){
                    // this.listenTo(this.model, "change", this.render);
                },
                productDetails: function(event){
                    event.preventDefault();
                    event.stopPropagation();
                    console.log(event.target.nodeName);
                    var target = event.target;

                    while(target.nodeName != 'A'){
                        target =  target.parentNode
                    }
                    var href = $(target).attr('href');
                    var itemid = href.substr(href.lastIndexOf('/')+1);

                    console.log("clicked on a product: " + itemid);

                /*  //show Panel
                    var panel = $("#productOverlay" );
                    $("#productOverlay .title").replaceWith(href  + '  itemid:' + itemid);
                    panel.css("display","block");
                    window.scrollTo(0,0);

                    var UserCollection = Backbone.Collection.extend({

                        url: 'http://aguevara-linux.corp.walmart.com/search/catalog/itemIds.ems?itemids=' + itemid,
                        parse: function(data) {
                            return data.items;
                        }
                       //will do rest of the code later -
                    });*/
                    window.location = "http://localhost:8000/product/?itemid=" +itemid ;

                }
        });
        var view = new itemsView({ template: Handlebars.templates['items'], model: model });
        view.render();

        $('.items').append(view.el);


        // select filters view
        var model = new Backbone.Model({items:{}});
        var FilterView = Backbone.View.extend({


            events: {
                'change select': 'updateTVs'
            },
            render: function() {
                var context = this.model ? this.model.attributes : {},
                    output = this.options.template(context);
                this.$el.html(output);
            },

            updateTVs : function(event) {
                console.log("in filterview's product list");
                updateTVs.trigger('change',$(event.target).text());
                event.stopPropagation();


            }

        });

       var view = new FilterView({ template: Handlebars.templates['filters'], model: model });
        view.render();

        $('.filters .pull-right').append(view.el);



        // slider view
        var model = new Backbone.Model({items:{}});
        var SliderView = Backbone.View.extend({


            events: {
                rendered: function(event){
                    console.log("rendered slider views");
                }

                //'change select': 'updateTVs'
            },
            render: function() {
                var context = this.model ? this.model.attributes : {},
                    output = this.options.template(context);
                this.$el.html(output);
            },

            updateTVs : function(event) {
                console.log("in slider view's product list");
                updateTVs.trigger('change',$(event.target).text());
                event.stopPropagation();


            }

        });
        //summary view
        var model = new Backbone.Model({items:{}});
        var SummaryView = Backbone.View.extend({


            events: {
                rendered: function(event){
                    console.log("rendered summary views");
                },

                'click input': 'clearFilters'
            },
            render: function() {
                var context = this.model ? this.model.attributes : {},
                    output = this.options.template(context);
                this.$el.html(output);
            },

            clearFilters: function(event){
                $('.filters select').val('None');
                slider.trigger("setvals", { values: [50, 85] } );
                updateTVs.trigger('change',$(event.target).text());
            }

        });

        var view = new SummaryView({ template: Handlebars.templates['summary'], model: model });
        view.render();

        $('.summary').append(view.el);



        var view = new SliderView({ template: Handlebars.templates['slider'], model: model });
        view.render();

        $('.filters .pull-left').append(view.el);

        updateTVs.trigger('setup', 'setup slider');





   });




});
