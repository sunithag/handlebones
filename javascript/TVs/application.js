window.Application = {};

/* views */
Application.View = Backbone.View.extend({


    render: function() {
        var context = this.model ? this.model.attributes : {},

            output = this.options.template(context);
        this.$el.html(output);


    }
});


var slider;

var range = [0,0];
/* Events extend */

Application.updateTVs = {};

_.extend(Application.updateTVs, Backbone.Events);


Application.updateTVs.on("change", function(collection) {

        this.collection = collection
        this.newArray = this.collection.originalModels;


        var type = $("#typeList").val();
        var brand = $("#brandList").val();
        var sort = $("#sortList").val();
        var matches = $("#count");

        this.newArray= _.filter(this.newArray, function (item) {
            return (parseInt(item.get("size")) >= range[0] &&  parseInt(item.get("size")) <= range[1]);
        });

        this.newArray= _.filter(this.newArray, function (item) {
            return item.get("name").match(type) || type.match(/All/);
        });

        this.newArray= _.filter(this.newArray, function (item) {
            return item.get("name").match(brand) || brand.match(/All/);
        });

        this.newArray.sort(function(a,b) {
            return parseFloat(b.get("listPrice")) - parseFloat(a.get("listPrice"));
        });

       //improve it later..
        matches.html("");
        matches.html(this.newArray.length + " MATCHES ");
        $(".items").fadeOut(300);
        setTimeout($(".items").fadeIn(300), 300);
        $(".items").html("");

        this.collection.reset(this.newArray);



});



