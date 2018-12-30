describe('Protractor element Demo', function() {
	
	//Call to page object pattern PageObjectCalc.js
	var obj= require("./PageObjectCalc.js");
	var using = require('jasmine-data-provider');
	var d = require('./data.js');
	
	//Call to url calculator with page object
	beforeEach(function()
			{
		obj.getURL();
			});

	using(d.DataDriven, function (data, description) {	
	it('Testing calculator functionality'+description, function() {
		
		//using the page object "obj" definition.
		obj.firstinput.sendKeys(data.firstinput);
		obj.secondinput.sendKeys(data.secondinput);
		obj.goButton.click();

		//Call Page object result
		obj.result.getText().then(function(text)
		{
			console.log(text);
			browser.sleep(2000);
		})
		//Verify the result
		var res=obj.result.getText();
		expect(res).toBe(data.result);
	})
	});
	afterEach(function() {
	    console.log("Test is completed");    
	  });
});