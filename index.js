//jade adapter for static2000
'use strict';

var jade = require('jade');

module.exports = {
    templateGlob: '*.jade',
    globalsInclude: 'include ./includes/globals.jade\n',
    compile: function(source, options) {
        var jadeOptions = {
            filename: options.filename,
            pretty: true
        };
        return jade.compile(source, jadeOptions);
    },
    render: function(source, options) {
        var jadeOptions = {
            filename: options.filename,
            model: options.model
        };
        return jade.render(source, jadeOptions);
    }
};