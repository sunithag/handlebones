Application.SummaryView = Application.View.extend({


     el: '.summary',

     events: {

        'click input': 'clearFilters'

     },

     clearFilters: function(event){

         $('.filters select').val('None');
         slider.trigger("setvals", { values: [50, 85] } );
         Application.updateTVs.trigger('change',this.collection);

     }



 });
