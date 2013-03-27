Application.FilterView = Application.View.extend({

     el: '.filters .pull-right',


     events: {

        'change select': 'updateTVs'

     },

     updateTVs : function(event) {

         console.log("in filterview's product list");
         Application.updateTVs.trigger('change', this.collection);


     }

});
