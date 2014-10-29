requirejs_versiondep
====================

Requirejs plugin for loadin versioned files using web browser cache

To use the plugin we can use the properties:
- versionArgs: it´s an object with the resource name as property name and versión name as the value.
  	
     versionArgs: {
  	        'testLib': 3
  	 }

- versionArgsParam: it's an optional paramenter name for where de versión of the file will be sent. If the property doesn't exist the name 'v_args' will be sent. 

    versionArgsParam: 'v_param' -- this will produce a request with  xxxx/file?v_param=x

Example:

  Require configuration:
	
  	requirejs.config({
  	    appDir: ".",
  	    baseUrl: "",
  	    paths: {
    	    'testLib': 'test/testLib.js'
    	},
    	versionArgs: {
  	        'testLib': 3
  	    },

  	});

  Whe we use require

  	require(['versiondep!testLib'], function() {
  	    console.log("Loaded ");    
  	    
  	});
