'use strict';
require('./result.css');
require('page/common/layout.css');
require('page/common/nav-simple/index.js');
var $  =  require("jquery");
var navSide =   require('page/common/nav-slide/nav-slide.js');
var _mm     =   require('util/mm.js');

  $(function(){
      var type = _mm.getUrlParam('type') || 'default';
      $("." + type + '-success').show();
  });