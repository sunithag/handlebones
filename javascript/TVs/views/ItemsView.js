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

            //window.location = "http://localhost:8000/#product/" +itemid ;

            var view = new Application.productDetailsView({ template: Handlebars.templates['productPanel'], id:itemid, cartCollection:this.options.cartCollection});
            view.render();



        }
});
