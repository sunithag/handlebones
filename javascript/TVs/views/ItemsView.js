Application.ItemsView = Application.View.extend({


        el: '.items',

        render: function(){
            var context = this.collection ? this.collection.models : {},
                output = this.options.template({items:context});
            this.$el.html(output);

        },

        events:{

            'click a' : 'productDetails'
        },


        initialize : function(){
            this.collection.on('reset', this.render, this);
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

            window.location = "http://localhost:8000/#product/" +itemid ;

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
           // window.location = "http://localhost:8000/product/?itemid=" +itemid ;

        }
});
