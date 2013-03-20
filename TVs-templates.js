(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return " <ul class=\"nav nav-pills \" >\n     <li ><label>Type</label>\n         <select id = \"typeList\">\n            <option value = \"All\">All</option>\n            <option value = \"LCD\">LCD</option>\n            <option value = \"LED-LCD\">LED-LCD</option>\n            <option value = \"Plasma\">Plasma</option>\n         </select></li>\n     <li><label>Brand</label>\n          <select id = \"brandList\">\n             <option value = \"All\">All</option>\n             <option value = \"2\">Samsung</option>\n             <option value = \"3\">VIZIO </option>\n             <option value = \"4\">RCA</option>\n             <option value = \"5\">Sceptre</option>\n             <option value = \"6\">Element</option>\n             <option value = \"7\">HANNspree</option>\n             <option value = \"8\">Proscan</option>\n             <option value = \"9\">Sony </option>\n             <option value = \"10\">Emerson</option>\n          </select></li>\n     <li ><label>Sort</label>\n          <select id = \"sortList\">\n             <option value = \"1\">Default</option>\n             <option value = \"2\">Price highest</option>\n             <option value = \"3\">Size</option>\n             <option value = \"4\">Brand</option>\n          </select> </li>\n</ul>\n\n\n";
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n			       <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			       <div class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n			       <div class=\"desc\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n			       <div class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n			    </a>\n		    </li>\n         ";
  return buffer;
  }

  buffer += "<ul class=\"nav nav-pills cccc\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n";
  return buffer;
  });
templates['productPanel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\n          <div class=\"pinfo\">\n              <span class=\"close\"></span>\n              <span class=\"title\">title</span>\n          </div>";
  });
templates['slider'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<ul class=\"nav nav-pills \">\n    <li ><i class=\"sprite-logoicon\"></i><div class=\"logo\">TVFinder<sup>TM</sup></div></li>\n    <li style=\"margin-left:20px\"><div class=\"slider\"><span>Size</span><div id=\"size-slider\"></div></div></li>\n</ul>\n";
  });
templates['summary'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"clearfix\" >\n      <span class=\"clear\">\n            <input type=\"button\" id=\"clear_filters\" value=\"Clear Filters\" style=\"border-radius:5px;background-color:white;\" >\n      </span>\n      <span class=\"results\">\n         <span id=\"count\"> 100 MATCHES </span>FOR TELEVISIONS FITTING THAT CRITERIA\n      </span>\n</div>";
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return " <ul class=\"nav nav-pills \" >\n     <li ><label>Type</label>\n         <select id = \"typeList\">\n            <option value = \"All\">All</option>\n            <option value = \"LCD\">LCD</option>\n            <option value = \"LED-LCD\">LED-LCD</option>\n            <option value = \"Plasma\">Plasma</option>\n         </select></li>\n     <li><label>Brand</label>\n          <select id = \"brandList\">\n             <option value = \"All\">All</option>\n             <option value = \"2\">Samsung</option>\n             <option value = \"3\">VIZIO </option>\n             <option value = \"4\">RCA</option>\n             <option value = \"5\">Sceptre</option>\n             <option value = \"6\">Element</option>\n             <option value = \"7\">HANNspree</option>\n             <option value = \"8\">Proscan</option>\n             <option value = \"9\">Sony </option>\n             <option value = \"10\">Emerson</option>\n          </select></li>\n     <li ><label>Sort</label>\n          <select id = \"sortList\">\n             <option value = \"1\">Default</option>\n             <option value = \"2\">Price highest</option>\n             <option value = \"3\">Size</option>\n             <option value = \"4\">Brand</option>\n          </select> </li>\n</ul>\n\n\n";
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n			       <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			       <div class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n			       <div class=\"desc\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n			       <div class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n			    </a>\n		    </li>\n         ";
  return buffer;
  }

  buffer += "<ul class=\"nav nav-pills cccc\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n";
  return buffer;
  });
templates['productPanel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\n          <div class=\"pinfo\">\n              <span class=\"close\"></span>\n              <span class=\"title\">title</span>\n          </div>";
  });
templates['slider'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<ul class=\"nav nav-pills \">\n    <li ><i class=\"sprite-logoicon\"></i><div class=\"logo\">TVFinder<sup>TM</sup></div></li>\n    <li style=\"margin-left:20px\"><div class=\"slider\"><span>Size</span><div id=\"size-slider\"></div></div></li>\n</ul>\n";
  });
templates['summary'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"clearfix\" >\n      <span class=\"clear\">\n            <input type=\"button\" id=\"clear_filters\" value=\"Clear Filters\" style=\"border-radius:5px;background-color:white;\" >\n      </span>\n      <span class=\"results\">\n         <span id=\"count\"> 100 MATCHES </span>FOR TELEVISIONS FITTING THAT CRITERIA\n      </span>\n</div>";
  });
})();
