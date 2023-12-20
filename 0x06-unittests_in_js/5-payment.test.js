const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const assert = require("assert");

describe("sendPaymentRequestToApi", () => {
    beforeEach("Set up spy for each test", () => {
	    sinon.spy(console, "log");
    });
    afterEach("restore spy after each test", () => {
	    console.log.restore();
    });
    it("check that console.log is called with the right arg", () => {
	    sendPaymentRequestToApi(100, 20);

	    assert(console.log.withArgs("The total is: 120").calledOnce);
    });
    it("check that console.log is called with the right arg", () => {
	    sendPaymentRequestToApi(10, 10);

	    assert(console.log.withArgs("The total is: 20").calledOnce);
    });
});
