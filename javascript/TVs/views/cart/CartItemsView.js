Application.CartView = Application.View.extend({

    el: '#cartOverlay .cartItms',

    events: {
        'click .remove': 'removeItem',
        'click .save': 'saveItem'

    },
    initialize : function(){
        this.options.cartCollection.on('change', this.render, this);
        this.options.cartCollection.on('remove', this.render, this);
    },

    removeItem: function(event){
        var target = event.currentTarget;
        this.item = $(target).attr('data-itemId');
        this.model = this.options.cartCollection.get(this.item);
        //event bindings of all previously displayed views have not been removed and this event gets
        // triggered for all the previously displayed views also, so check if it is a currentTarget
        if(this.model != null){
            this.options.cartCollection.localStorage.destroy(this.model);
            this.options.cartCollection.remove(this.model);

        }

    },

    saveItem: function(event){
        var target = event.currentTarget;
        this.item = $(target).attr('data-itemId');
        this.model = this.options.cartCollection.get(this.item);
        if(this.model != null){
            this.options.saveCollection.create(this.model.attributes);
            this.options.cartCollection.localStorage.destroy(this.model);
            this.options.cartCollection.remove(this.model);
        }

    },



    render: function(){
        var context = this.options.cartCollection ? this.options.cartCollection.models : {},
            output = this.options.template({items:context});
        this.$el.html(output);

    }
});