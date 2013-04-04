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


            var view = new Application.productDetailsView({ template: Handlebars.templates['product/productPanel'], id:itemid, cartCollection:this.options.cartCollection, saveCollection:this.options.saveCollection});
            view.render();
            view.showPanel();



        }
});
