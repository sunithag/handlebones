Application.CartDetailsView = Application.View.extend({

    el: '#cartOverlay',

    events: {
        'click .close': 'hideOverlay'

    },

    hideOverlay: function(event){
        this.$el.css("display","none");
    }



});