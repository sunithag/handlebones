Application.RRView = Application.View.extend({

    el: '.pdreviews',

    render: function() {
        var context = this.model ? this.model.attributes : {},
            output = this.options.template(context);
        this.$el.html(output);
        this.setup();
    },

    setup: function(){
       // $('#carRRs').wmCarousel({ duration:100});
    }


});
