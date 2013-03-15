window.Application = {};

Application.View = Backbone.View.extend({
  render: function() {
    var context = this.model ? this.model.attributes : {},
        output = this.options.template(context);
    this.$el.html(output);
  }
});

$(function() {


      var model = new Backbone.Model({
        greeting: 'Hello'
      });
      var indexView = new Application.View({
        template: Handlebars.templates['index'],
        model: model
      });
      indexView.render();

      $('.container').append(indexView.el);

    $.getJSON('http://localhost:8000/tvs.json',null,function(data) {



        // Items view
        var imodel = new Backbone.Model({items:data});
        var itemsView = new Application.View({
            template: Handlebars.templates['items'],
            model: imodel
        });
        itemsView.render();
        $('.items').append(itemsView.el);






    });

});
