var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("Tools", function () {
    describe("printName()", function () {

        it("should print the last name first", function () {

            var results = tools.printName({
                first: "Pieter-Jan",
                last: "Desmadryl"
            });

            expect(results).to.equal("Desmadryl, Pieter-Jan");

        });

        describe("loadWiki()", function () {
            
            this.timeout(5000);
            
            it("Load Abraham Lincoln's wiki page", function (done) {
                
                tools.loadWiki({ first: 'Abraham', last: 'Lincoln' }, function (html) {
                    expect(html).to.be.ok;
                    done();
                });
            });


        });

    });
});