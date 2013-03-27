Application.SliderView = Application.View.extend({


     el: '.filters .pull-left',

    render: function() {
        var context = this.model ? this.model.attributes : {},
        output = this.options.template(context);
        this.$el.html(output);
        this.setup();
    },

    setup: function(){
        var that = this;

        console.log("in SliderView setup");

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
                Application.updateTVs.trigger('change',that.collection);
            }

        });

        slider.bind("setvals", function (e, p) {
            $(this).slider("option", "values", p.values);
            $(this).slider("option", "slide").call($(this), null, p);
        });

        slider.trigger("setvals", { values: [50, 85] } );



        Application.updateTVs.trigger('change',this.collection);

    }

 });

