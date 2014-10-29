define(['module'], function(module) {
    'using strict';

    var createAlternateVersionArgs = function(config) {
            config.alternativeVersionArgs = (!config.alternativeVersionArgs && config.urlArgs)?
              config.urlArgs:config.alternativeVersionArgs;
        },
        cleanUrlArgs = function(config) {
            config.urlArgs = (config.alternativeVersionArgs && config.urlArgs)? '' : config.urlArgs;
        }


    return {
        load: function(name, req, onload, config) {
            var fileReq = config.baseUrl + name,
                paramName = config.versionArgsParam || 'v_args',
                params = '?';

            createAlternateVersionArgs(config);
            cleanUrlArgs(config);

            if (config.versionArgs && config.versionArgs[fileReq]){
                params +=  paramName + "=" + config.versionArgs[fileReq];
            }else if(config.alternativeVersionArgs) {
                params += config.alternativeVersionArgs;
            }

            name = req.toUrl(name) + params;  
            console.log('get '+name);
            req([name], onload);
        }
    };
});