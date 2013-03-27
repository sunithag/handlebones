Application.ImageCarouselView = Application.View.extend({

    el: '#pdimages',

    render: function() {
        var context = this.model ? this.model.attributes : {},
            output = this.options.template(context);
        this.$el.html(output);
        this.setup();
    },

    setup: function(){
       // $('#carImgs').wmCarousel({ duration:100});
    }
});

