# npm-save

[![Build Status](https://travis-ci.org/joeyism/node-npm-save.svg?branch=master)](https://travis-ci.org/joeyism/node-npm-save)

A module that allows module npm install --save or --save-dev 

## Installation

    > npm install --save npm-save

## Usage
There are two options: to --save or to --save-dev. Either way, to depend on this module, require it by

    var npm = require("npm-save");


### Save
To save the modules, add

    npm.save([kontains, xcept]).then(function(){
        /** save successful **/
    }).catch(function(err){
        /** an error has occurred **/
    });

### Save Dev
To save the development modules, add

    npm.saveDev([kontains, xcept]).then(function(){
        /** saveDev successful **/
    }).catch(function(err){
        /** an error has occurred **/
    });

## Versions
**1.0.0**
* First publish
