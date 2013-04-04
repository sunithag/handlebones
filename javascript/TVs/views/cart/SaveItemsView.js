Application.SaveView = Application.View.extend({

    el: '#cartOverlay .saveItms',
    events: {
        'click .remove': 'removeItem',
        'click .mtc': 'moveToCart'

    },

    initialize : function(){
        this.options.saveCollection.on('change', this.render, this);
        this.options.saveCollection.on('remove', this.render, this);
    },

    removeItem: function(event){
        var target = event.currentTarget;
        this.item = $(target).attr('data-itemId');
        this.model = this.options.saveCollection.get(this.item);
        //event bindings of all previously displayed views have not been removed and this event gets
        // triggered for all the previously displayed views also, so check if it is a currentTarget
        if(this.model != null){
            this.options.saveCollection.localStorage.destroy(this.model);
            this.options.saveCollection.remove(this.model);

        }

    },

    moveToCart: function(event){
        var target = event.currentTarget;
        this.item = $(target).attr('data-itemId');
        this.model = this.options.saveCollection.get(this.item);
        if(this.model != null){
            this.options.cartCollection.create(this.model.attributes);
            this.options.saveCollection.localStorage.destroy(this.model);
            this.options.saveCollection.remove(this.model);
        }

    },
    render: function(){
        var context = this.options.saveCollection ? this.options.saveCollection.models : {},
            output = this.options.template({items:context});
        this.$el.html(output);

    }


});