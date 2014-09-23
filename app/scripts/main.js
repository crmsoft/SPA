'use strict';
require.config({
  baseUrl: 'bower_components/jsx-requirejs-plugin/js/',

  paths: {
  	'jquery'		    : '../../jquery/dist/jquery',
    'react'			    : 'react-with-addons-0.11.1',
    'JSXTransformer': 'JSXTransformer-0.11.1',
    'Navs'          : '../../../scripts/navigation',
    'home'          : '../../../scripts/home',
    'job'           : '../../../scripts/job',
    'about'         : '../../../scripts/about',
    'contact'       : '../../../scripts/contact',
  },

  jsx: {
    fileExtension: '.jsx'
  }
});

require(['jsx!Navs'], function() {


      // velosiped ... 
    
});
