"use strict";
var npm = require("npm");
var spawn = require("child_process").spawn;
var q = require("q");

var makeSureIsArray = function(elem){
    return (Array.isArray(elem)) ? elem: [elem];
};

var install = function(packages, options){
    packages = makeSureIsArray(packages);

    var command = (process.platform === 'win32') ? 'npm.cmd' : 'npm';

    var deferred = q.defer();


    var install = ["install"];

    if (options){
        install.push(options);
    };

    var g = spawn(command, install.concat(packages), { stdio: 'inherit' });

    g.on("error", function(err){
        deferred.reject(err);
    });

    g.on("close", function(){
        deferred.resolve();
    });

    return deferred.promise;
};

var save = function(packages){
    return install(packages, "--save");
};

var saveDev = function(packages){
    return install(packages, "--save-dev");
}; 

module.exports = {
    save: save,
    saveDev: saveDev
};
