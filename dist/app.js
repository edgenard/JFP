/*! JFP - v1.0.0 - 2015-01-02 *//*! JFP.config 02-01-2015 */
var modules=["ng","ui.router"];
/*! JFP.controllers 02-01-2015 */
!function(){"use strict";function a(a){this.$scope=a,this.baseTitle="JFP: Javascript Function Processor",this.title=this.baseTitle,this.initWatcher()}var b="head.controller.module";modules.push(b),angular.module(b,[]),a.$inject=["$scope"],a.prototype={setTitle:function(a){this.title=a?a+" - ":"",this.title+=this.baseTitle},initWatcher:function(){var a=angular.bind(this,this.setTitle);this.$scope.$root.$on("title.update",function(b,c){a(c.title)})}},angular.module(b).controller("headController",a)}();
/*! JFP.directives 02-01-2015 */
!function(){"use strict";function a(){return{restrict:"E",link:function(){$("pre code").each(function(a,b){hljs.highlightBlock(b)})}}}var b="highlight.directive.module";modules.push(b),angular.module(b,[]),angular.module(b).directive("highlight",a)}();
/*! JFP.app 02-01-2015 */
!function(){"use strict";function a(a,b){a.state("root",{url:"/",templateUrl:"templates/_home.html"}).state("documents",{url:"/documents","abstract":!0,templateUrl:"templates/_documents.html"}).state("documents.core",{url:"/core",templateUrl:"templates/documents/_core.html"}).state("documents.array",{url:"/array",templateUrl:"templates/documents/_array.html"}).state("documents.conversion",{url:"/conversion",templateUrl:"templates/documents/_conversion.html"}).state("documents.math",{url:"/math",templateUrl:"templates/documents/_math.html"}).state("documents.object",{url:"/object",templateUrl:"templates/documents/_object.html"}).state("documents.predicate",{url:"/predicate",templateUrl:"templates/documents/_predicate.html"}),b.otherwise("/")}angular.module("jfp.app",modules),a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("jfp.app").config(a),angular.bootstrap(document,["jfp.app"])}();