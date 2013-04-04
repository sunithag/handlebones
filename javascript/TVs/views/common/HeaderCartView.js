Application.HeaderCartView = Application.View.extend({


    el: '#hCart',

    initialize : function(){
        this.options.cartCollection.on('change', this.render, this);
        this.options.cartCollection.on('remove', this.render, this);
    },

    events: {

        'click a': 'showCartPanel'

    },

    showCartPanel: function(){
        $('#productOverlay').css("display","none");
        $("#cartOverlay").css("display","block");
        window.scrollTo(0,0);
    },

    render: function(){
        var context = this.options.cartCollection ? this.options.cartCollection.models : {},
            output = this.options.template({items:context});
        this.$el.html(output);

        if(this.options.cartCollection.length > 0){
            $('span', this.$el).css('color', '#FAAF4C');
        }

    }



});