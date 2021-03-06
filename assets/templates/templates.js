Ember.TEMPLATES["about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"squish\">\n	<h1>About</h1>\n\n	<h2>The Project</h2>\n	<p>The Dopey 2D Animation program was started in May 2013 when an old fork of <a href=\"http://mypaint.intilinux.com\">MyPaint</a>, \"xsheet-mypaint\" was forked an updated to the latest MyPaint core.</p>\n\n	<h2>Why \"Dopey\"?</h2>\n	<p>The name \"Dopey\" was chosen for three main reasons:</p>\n	<ol>\n		<li>Analogue traditional 2D animaiton uses a tool called a \"Dope sheet\", \"Exposure sheet\" or \"X-sheet\". <a href=\"http://en.wikipedia.org/wiki/Exposure_sheet\">Read more on Wikipedia</a>.</li>\n		<li>To reference one of the dwarves in Disney's 1937 animation production of \"Snow White\"</li>\n		<li>Because we try not to take ourselves too seriously</li>\n	</ol>\n\n	<h1>Contributors</h1>\n	<p>Dopey would not be possible without the MyPaint project or the original \"xsheet-mypaint\" project created by Manuel Quiñones. To see the full list of contributors, see <a href=\"https://github.com/dopeyanimation/dopey/graphs/contributors\">the contributors page</a> on GitHub.</p>\n\n	<h1>Contact</h1>\n	<p><a href=\"http://davissorenson.com\">Davis Sorenson</a> is the current maintainer of Dopey. You can email him at <a href=\"mailto:davis@dopeyanimation.org\">davis@dopeyanimation.org</a>.</p>\n</div>\n");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("<h1>Dopey 2D Animation</h1>");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Download");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Features&#x200A;/&#x200A;Gallery");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Features");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("About");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("Help");
  }

  data.buffer.push("<header class=\"top\">\n	<div class=\"squish\">\n		<div class=\"logo\">\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</div>\n		<nav>\n			<ul>\n				<li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "download", options) : helperMissing.call(depth0, "linkTo", "download", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n				<li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "features", options) : helperMissing.call(depth0, "linkTo", "features", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n				<li><a href=\"http://dopeyanimation.tumblr.com/\">Blog</a></li>\n				<li><a href=\"https://github.com/dopeyanimation/dopey/wiki\">Wiki</a></li>\n				<li class=\"fork\"><a href=\"https://github.com/dopeyanimation/dopey/fork\" class=\"octoface\">Fork</a></li>\n			</ul>\n		</nav>\n	</div>\n</header>\n\n<div role=\"main\">\n	");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n<footer class=\"bottom\">\n	<div class=\"squish\">\n		<div class=\"inner\">\n			<div class=\"copyright\">\n				<small>This site &copy;2013 <a href=\"http://davissorenson.com/\">Davis Sorenson</a><br>\n					<a href=\"https://github.com/dopeyanimation/dopey/graphs/contributors\">List of Dopey contributors</a></small>\n			</div>\n			<nav>\n				<ul>\n					<li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n					<li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "download", options) : helperMissing.call(depth0, "linkTo", "download", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n					<li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "features", options) : helperMissing.call(depth0, "linkTo", "features", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n				</ul>\n				<ul>\n					<li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "about", options) : helperMissing.call(depth0, "linkTo", "about", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n					<li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "help", options) : helperMissing.call(depth0, "linkTo", "help", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n					<li><a href=\"http://dopeyanimation.tumblr.com/\">Blog</a></li>\n				</ul>\n				<ul>\n					<li><a href=\"https://github.com/dopeyanimation/dopey\">GitHub</a></li>\n					<li><a href=\"https://twitter.com/dopeyanimation\">Twitter</a></li>\n					<li><a href=\"#\">Google+</a></li>\n				</ul>\n			</nav>\n		</div>\n	</div>\n</footer>");
  return buffer;
  
});

Ember.TEMPLATES["download"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"squish\">\n	<h1>Download</h1>\n\n	<h2>Ubuntu&#x200A;/&#x200A;Debian</h2>\n	<p>Ubuntu build details</p>\n\n	<h2>Windows</h2>\n	<p>Windows build details</p>\n\n	<h2>OS X</h2>\n	<p>Unfortunately the developers have limited access to a Mac, so right now there is no OS X build.</p>\n\n	<h2>Build from source</h2>\n	<p>See <a href=\"https://github.com/dopeyanimation/dopey/wiki/Building\">the wiki entry</a> on building from source. It's easiest on Debian or Debian-based distros.</p>\n</div>");
  
});

Ember.TEMPLATES["features"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"squish\">\n	<h1>Features&#x200A;/&#x200A;Gallery</h1>\n</div>");
  
});

Ember.TEMPLATES["help"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"squish\">\n	<h1>Help</h1>\n	<p>Currently, the way to get Dopey-related help is to either look on the <a href=\"https://github.com/dopeyanimation/dopey/wiki\">Dopey Wiki</a> or contact the maintainer, <a href=\"http://davissorenson.com/\">Davis Sorenson</a>. He can be reached at <a href=\"mailto:davis@dopeyanimation.org\">davis@dopeyanimation.org</a> or @<a href=\"http://twitter.com/dopeyanimation\">dopeyanimation</a>&#x200A;/&#x200A;@<a href=\"http://twitter.com/dopeyanimation\">davissorenson</a> on Twitter.</p>\n</div>");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n								<h2>Download</h2>\n								<span>&ndash; Free/Open Source</span>\n							");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("See Features");
  }

  data.buffer.push("<section>\n	<div id=\"hero\">\n		<div class=\"slider\">\n			<div class=\"slide tube\">\n				<!-- <img src=\"assets/i/tube.jpg\" alt=\"\"> -->\n				<div class=\"squish\">\n					<div class=\"overlay\">\n						<h1 class=\"large\">Animate in both D's</h1>\n						<div id=\"download-button\">\n							");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "download", options) : helperMissing.call(depth0, "linkTo", "download", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n						</div>\n					</div>\n				</div>\n			</div>\n			<!-- <div class=\"slide other\">\n				<img src=\"\" alt=\"\">\n				<div class=\"squish\">\n					<div class=\"overlay\">\n						<h1 class=\"large\">Groundbreaking technology simulates stuff that's pretty cheap really</h1>\n					</div>\n				</div>\n			</div> -->\n		</div>\n	</div>\n\n	<div id=\"lookatthis\" class=\"squish\">\n		<!-- neat.bourbon.io told me to do this -->\n		<div class=\"this\">\n			<aside>\n				<img src=\"http://placehold.it/438x230\" alt=\"\">\n			</aside>\n			<article>\n				<h1>Animate easily</h1>\n				<p>Dopey is designed to let you start animating as quickly as possible, while still offering advanced features.</p>\n			</article>\n		</div>\n		<div class=\"this\">\n			<article>\n				<h1>Animate well</h1>\n				<p>Because Dopey is based on <a href=\"http://mypaint.intilinux.com/\">MyPaint</a>, it inherits its powerful brush engine and fantastic user interface that doesn't get in your way.</p>\n				<div class=\"calltoaction\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "features", options) : helperMissing.call(depth0, "linkTo", "features", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</div>\n			</article>\n			<aside>\n				<img src=\"http://placehold.it/438x230\" alt=\"\">\n			</aside>\n		</div>\n	</div>\n</section>");
  return buffer;
  
});