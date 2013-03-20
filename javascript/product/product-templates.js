(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n";
  return buffer;
  }

  buffer += "<h3>About</h3>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartfilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<button class=\"btn\">Sign up</button>";
  });
templates['prodinfo'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<h1 class=\"title\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n<div class=\"info\"><span class=\"rating\"><i><i style=\"width: 80.36%; \"></i></i></span><span class=\"reviews\">109 Reviews</span><span class=\"write\">Write a Review</span><span class=\"question\">Ask a Question</span></div>\n<div class=\"price\">$"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.sellers),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n ";
  return buffer;
  }

  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
templates['productdetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "           <div class=\"clearfix\">\n                <h3>Product Details</h3>\n                <span class=\"rbtn\"><button class=\"btn\"><span>Have a Question?</span></button></span>\n            </div>\n            <div class=\"tabbable tabs-left\">\n\n          <div class=\"tabbable tabs-left\">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"active\"><a href=\"#lA\" data-toggle=\"tab\">Full Description</a></li>\n                    <li><a href=\"#lB\" data-toggle=\"tab\">Specifications</a></li>\n                    <li><a href=\"#lC\" data-toggle=\"tab\">Warranty</a></li>\n                    <li><a href=\"#lD\" data-toggle=\"tab\">Financing</a></li>\n                    <li><a href=\"#lE\" data-toggle=\"tab\">Gifting</a></li>\n\n                </ul>\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane active\" id=\"lA\">\n                        <p>Full Description goes here...</p>\n                    </div>\n                    <div class=\"tab-pane\" id=\"lB\">\n                        <p>Specifications goes here...</p>\n                    </div>\n                    <div class=\"tab-pane\" id=\"lC\">\n                        <p>Warranty goes here</p>\n                    </div>\n                    <div class=\"tab-pane\" id=\"lD\">\n                        <p>Financing goes here</p>\n                    </div>\n                    <div class=\"tab-pane\" id=\"lE\">\n                        <p>Gifting ...</p>\n                    </div>\n                </div>\n            </div>\n\n            </div>\n";
  });
templates['productimages'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<li >\n				    <div class=\"imgc\">\n						<a href=\"#\" title=\"image 01\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"image 01\" border=\"0\"></a>\n					</div>\n				</li>\n			 ";
  return buffer;
  }

  buffer += "\n	<div id=\"carImgs\" class=\"car\">\n		<div class=\"previous fade\"></div>\n		<div class=\"vpt nav\">\n			<ul>\n			 ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n			</ul>\n		</div>\n		<div class=\"next\" ></div>\n	</div>\n	<div class=\"position\">\n	    <i><i></i></i>\n	</div>\n";
  return buffer;
  });
templates['reviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n          <div class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n          <div class=\"reviewer\">by<span>";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span><span class=\"on\">on ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> . Verified Purchaser</div>\n          <div class=\"rating\"><i><i style=\"width: 80.36%; \"></i></i></div>\n          <div class=\"desc\">";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n\n      </li>\n    ";
  return buffer;
  }

  buffer += "<div class=\"clearfix\">\n	<h3>Reviews & Ratings <span>(5 Total)</h3>\n	<span class=\"rbtn\"><button class=\"btn\"><span>Write a Review</span></button></span>\n</div>\n<div class=\"btngrp\">\n<button class=\"btn\"><span>Men & Women</span></button>\n<button class=\"btn\"><span>All Ages</span></button>\n<button class=\"btn\"><span>All Ratings</span></button>\n<button class=\"btn\"><span>By Most Helpful</span></button>\n</div>\n<div class=\"pdcar\" id=\"pdrr\">\n\n	<div id=\"carRRs\" class=\"car\">\n		<div class=\"previous\"></div>\n		<div class=\"vpt nav\">\n\n    <ul>\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.rrs) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.rrs; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.rrs) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n    </div>\n    <div class=\"next\" ></div>\n    </div>\n </div>";
  return buffer;
  });
templates['viewedalso'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n			       <div class=\"imgc\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\"></div>\n			       <div class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n			       <div class=\"desc\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n			       <div class=\"price\">";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n			       <div class=\"rating\"><i><i style=\"width: 80.36%; \"></i></i></div>\n			    </a>\n\n		    </li>\n		";
  return buffer;
  }

  buffer += "<div class=\"clearfix\">\n	<h3>People Who Viewed This Item Also Viewed</h3>\n	<span class=\"rbtn\"><button class=\"btn\"><span>See More</span></button></span>\n</div>\n<ul class=\"nav nav-pills cccc\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.shortDescription)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n";
  return buffer;
  }

  buffer += "<h3>About</h3>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartfilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<button class=\"btn\">Sign up</button>";
  });
templates['prodinfo'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<h1 class=\"title\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n<div class=\"info\"><span class=\"rating\"><i><i style=\"width: 80.36%; \"></i></i></span><span class=\"reviews\">109 Reviews</span><span class=\"write\">Write a Review</span><span class=\"question\">Ask a Question</span></div>\n<div class=\"price\">$"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.sellers),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n ";
  return buffer;
  }

  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
templates['productdetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "           <div class=\"clearfix\">\n                <h3>Product Details</h3>\n                <span class=\"rbtn\"><button class=\"btn\"><span>Have a Question?</span></button></span>\n            </div>\n            <div class=\"tabbable tabs-left\">\n\n          <div class=\"tabbable tabs-left\">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"active\"><a href=\"#lA\" data-toggle=\"tab\">Full Description</a></li>\n                    <li><a href=\"#lB\" data-toggle=\"tab\">Specifications</a></li>\n                    <li><a href=\"#lC\" data-toggle=\"tab\">Warranty</a></li>\n                    <li><a href=\"#lD\" data-toggle=\"tab\">Financing</a></li>\n                    <li><a href=\"#lE\" data-toggle=\"tab\">Gifting</a></li>\n\n                </ul>\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane active\" id=\"lA\">\n                        <p>Full Description goes here...</p>\n                    </div>\n                    <div class=\"tab-pane\" id=\"lB\">\n                        <p>Specifications goes here...</p>\n                    </div>\n                    <div class=\"tab-pane\" id=\"lC\">\n                        <p>Warranty goes here</p>\n                    </div>\n                    <div class=\"tab-pane\" id=\"lD\">\n                        <p>Financing goes here</p>\n                    </div>\n                    <div class=\"tab-pane\" id=\"lE\">\n                        <p>Gifting ...</p>\n                    </div>\n                </div>\n            </div>\n\n            </div>\n";
  });
templates['productimages'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<li >\n				    <div class=\"imgc\">\n						<a href=\"#\" title=\"image 01\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"image 01\" border=\"0\"></a>\n					</div>\n				</li>\n			 ";
  return buffer;
  }

  buffer += "\n	<div id=\"carImgs\" class=\"car\">\n		<div class=\"previous fade\"></div>\n		<div class=\"vpt nav\">\n			<ul>\n			 ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n			</ul>\n		</div>\n		<div class=\"next\" ></div>\n	</div>\n	<div class=\"position\">\n	    <i><i></i></i>\n	</div>\n";
  return buffer;
  });
templates['reviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n          <div class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n          <div class=\"reviewer\">by<span>";
  if (stack1 = helpers.customer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span><span class=\"on\">on ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> . Verified Purchaser</div>\n          <div class=\"rating\"><i><i style=\"width: 80.36%; \"></i></i></div>\n          <div class=\"desc\">";
  if (stack1 = helpers.review) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.review; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n\n      </li>\n    ";
  return buffer;
  }

  buffer += "<div class=\"clearfix\">\n	<h3>Reviews & Ratings <span>(5 Total)</h3>\n	<span class=\"rbtn\"><button class=\"btn\"><span>Write a Review</span></button></span>\n</div>\n<div class=\"btngrp\">\n<button class=\"btn\"><span>Men & Women</span></button>\n<button class=\"btn\"><span>All Ages</span></button>\n<button class=\"btn\"><span>All Ratings</span></button>\n<button class=\"btn\"><span>By Most Helpful</span></button>\n</div>\n<div class=\"pdcar\" id=\"pdrr\">\n\n	<div id=\"carRRs\" class=\"car\">\n		<div class=\"previous\"></div>\n		<div class=\"vpt nav\">\n\n    <ul>\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.rrs) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.rrs; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.rrs) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n    </div>\n    <div class=\"next\" ></div>\n    </div>\n </div>";
  return buffer;
  });
templates['viewedalso'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    <li>\n			    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n			       <div class=\"imgc\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\"></div>\n			       <div class=\"title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n			       <div class=\"desc\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n			       <div class=\"price\">";
  if (stack1 = helpers.listPrice) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.listPrice; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n			       <div class=\"rating\"><i><i style=\"width: 80.36%; \"></i></i></div>\n			    </a>\n\n		    </li>\n		";
  return buffer;
  }

  buffer += "<div class=\"clearfix\">\n	<h3>People Who Viewed This Item Also Viewed</h3>\n	<span class=\"rbtn\"><button class=\"btn\"><span>See More</span></button></span>\n</div>\n<ul class=\"nav nav-pills cccc\">\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.items) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.items; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</ul>";
  return buffer;
  });
})();
