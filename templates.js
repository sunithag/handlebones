(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li>\n	    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n		    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			<span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			<span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n		 </a>\n	</li>\n";
  return buffer;
  }

  options = {hash:{
    'tag': ("ul"),
    'class': ("nav nav-pills cccc")
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.items),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "items", options));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li>\n	    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n		    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			<span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			<span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n		 </a>\n	</li>\n";
  return buffer;
  }

  options = {hash:{
    'tag': ("ul"),
    'class': ("nav nav-pills cccc")
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.items),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "items", options));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li>\n	    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n		    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			<span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			<span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n		 </a>\n	</li>\n";
  return buffer;
  }

  buffer += "hello\n";
  options = {hash:{
    'tag': ("ul"),
    'class': ("nav nav-pills")
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.items),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "items", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li>\n	    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n		    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			<span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			<span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n		 </a>\n	</li>\n";
  return buffer;
  }

  buffer += "hello\n";
  options = {hash:{
    'tag': ("ul"),
    'class': ("nav nav-pills")
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.items),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "items", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"item\">\n<div class=\"image\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" /></div>\n<div class=\"title\" title=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div class=\"descrip\" title=\"";
  if (stack1 = helpers.descrip) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.descrip; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.descrip) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.descrip; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div class=\"price\">$";
  if (stack1 = helpers.dollars) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dollars; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<sup>.";
  if (stack1 = helpers.cents) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cents; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</sup></div>\n<div class=\"rating\"><span class=\"gray\"><span class=\"gold\" style=\"width:";
  if (stack1 = helpers.stars) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stars; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></span></span></div>\n</div>\n";
  return buffer;
  }

  buffer += "hellofjfjfjff\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n			       <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			       <span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			       <span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			    </a>\n		    </li>\n";
  return buffer;
  }

  buffer += "hellofjfjfjff\n";
  options = {hash:{
    'tag': ("ul"),
    'class': ("nav nav-pills cccc")
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.items),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "items", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n			       <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			       <span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			       <span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			    </a>\n		    </li>\n";
  return buffer;
  }

  buffer += "hellofjfjfjff\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n			       <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			       <span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			       <span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			    </a>\n		    </li>\n";
  return buffer;
  }

  buffer += "hellofjfjfjff\n";
  options = {hash:{
    'tag': (depth0.ul)
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.items),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "items", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n			       <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			       <span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			       <span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			    </a>\n		    </li>\n         ";
  return buffer;
  }

  buffer += "hellofjfjfjff\n        ";
  options = {hash:{
    'tag': ("ul"),
    'class': ("nav nav-pills cccc")
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.items),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "items", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n			       <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			       <span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			       <span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			    </a>\n		    </li>\n         ";
  return buffer;
  }

  buffer += "hellofjfjfjff fhaslfhsal\n        ";
  options = {hash:{
    'tag': ("ul"),
    'class': ("nav nav-pills cccc")
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.items),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "items", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n			       <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			       <span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			       <span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			    </a>\n		    </li>\n         ";
  return buffer;
  }

  buffer += "hellofjfjfjff fhaslfhsal\n        ";
  options = {hash:{
    'tag': ("ul"),
    'class': ("nav nav-pills cccc")
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.items),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "items", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n			       <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			       <span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			       <span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			    </a>\n		    </li>\n         ";
  return buffer;
  }

  buffer += "hellofjfjfjff fhaslfhsal\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n			       <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			       <span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			       <span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			    </a>\n		    </li>\n         ";
  return buffer;
  }

  buffer += "hellofjfjfjff fhaslfhsal\n<ul class=\"nav nav-pills cccc\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- header starts -->\n    <header class=\"tvfhead clearfix\">\n        <ul class=\"nav nav-pills pull-right\">\n            <li>\n                <a>\n                    <i class=\"sprite-create\"></i>\n                    <span >\n                        Create</span>\n               </a>\n               <div>a new wishlist</div>\n\n             </li>\n\n            <li>\n                <a>\n                    <i class=\"sprite-person\"></i>\n                    <span>Sign In</span>\n               </a>\n               <div>to your account </div>\n            </li>\n\n            <li class=\"last\">\n                <a>\n                    <i class=\"sprite-cart\"></i>\n                    <span>0 Items</span>\n               </a>\n               <div>in your cart  </div>\n            </li>\n\n        </ul>\n        <ul class=\"nav nav-pills pull-left\">\n            <li>\n                <canvas id=\"canvas\" height=\"47\" width=\"185\"></canvas>\n            </li>\n            <li>\n                <form name=\"search\">\n                    <input type=\"search\" placeholder=\"Search\" class=\"text\" name=\"search\" />\n                </form>\n            </li>\n        </ul>\n    </header>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.greeting) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.greeting; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " world!";
  return buffer;
  });
templates['items'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"http://www.walmart.com/ip/Sceptre-32-X322BV-HD/15739136\">\n			       <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n			       <span class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			       <span class=\"price\">$";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n			    </a>\n		    </li>\n         ";
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
})();
