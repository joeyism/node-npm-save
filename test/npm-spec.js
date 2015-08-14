"use strict";
var expect = require("chai").expect;
var mockery = require("mockery");
var pathToNpm = "../index";
var npm;

var createFakeSpawn = function(callbackSource, callbackParam){
    var fakeChild = {
            spawn: function(){
                return {
                    on: function(elem, callback){
                        if(elem === callbackSource){
                            callback(callbackParam);                 
                        } 
                    }
                };
            }
    };
    return fakeChild;
};

describe("npm", function(){

    describe("save", function(){

        beforeEach(function(done){
            mockery.enable({
                warnOnReplace: false,
                warnOnUnregistered: false,
                useCleanCache: true
            });
            done();
        });

        afterEach(function(done){
            mockery.resetCache();
            mockery.deregisterAll();
            done();
        });

        it("should successfully npm install --save files", function(done){
            mockery.registerMock("child_process", createFakeSpawn("close"));
            npm = require(pathToNpm);    

            npm.save(["kontains", "xcept"]).then(function(result){
                expect(result).to.be.undefined;
                done();
            });
        });
        
        it("should successfully npm install --save files even if input is not an array", function(done){
            mockery.registerMock("child_process", createFakeSpawn("close"));
            npm = require(pathToNpm);    

            npm.save("kontains").then(function(result){
                expect(result).to.be.undefined;
                done();
            });
        });
        
        it("should fail to npm install --save files", function(done){
            mockery.registerMock("child_process", createFakeSpawn("error"));
            npm = require(pathToNpm);    

            npm.save(["kontains"]).catch(function(result){
                expect(result).to.be.undefined;
                done();
            });
        });
    });
    
    describe("saveDev", function(){

        beforeEach(function(done){
            mockery.enable({
                warnOnReplace: false,
                warnOnUnregistered: false,
                useCleanCache: true
            });
            done();
        });

        afterEach(function(done){
            mockery.resetCache();
            mockery.deregisterAll();
            done();
        });

        it("should successfully npm install --save-dev files", function(done){
            mockery.registerMock("child_process", createFakeSpawn("close"));
            npm = require(pathToNpm);    

            npm.saveDev(["kontains", "xcept"]).then(function(result){
                expect(result).to.be.undefined;
                done();
            });
        });
        
        it("should successfully npm install --save-dev files even if input is not an array", function(done){
            mockery.registerMock("child_process", createFakeSpawn("close"));
            npm = require(pathToNpm);    

            npm.saveDev("kontains").then(function(result){
                expect(result).to.be.undefined;
                done();
            });
        });
        
        it("should fail to npm install --save-dev files", function(done){
            mockery.registerMock("child_process", createFakeSpawn("error"));
            npm = require(pathToNpm);    

            npm.saveDev(["kontains"]).catch(function(result){
                expect(result).to.be.undefined;
                done();
            });
        });
    });
});
