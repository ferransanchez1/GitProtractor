describe('Protractor element Demo', function() {
	
	//Call to page object pattern PageObjectCalc.js
	var obj= require("./PageObjectCalc.js");
	var fs = require('fs');
	
	//Call to url calculator with page object
	beforeEach(function() {
		obj.getURL();
	  });
	
	it('Locators', function() {
			
			//using the page object "obj" definition.
			obj.firstinput.sendKeys("3");
			obj.secondinput.sendKeys("5");
			obj.goButton.click();
			//Verify the result
			expect(obj.result.getText()).toBe("8");
			//Other example of assertion to verify both numbers
			var a=8;
			expect(a).toEqual(8);

			//Call Page object result
			obj.result.getText().then(function(text)
			{
				console.log(text);
				browser.sleep(5000);
			})
			//writing screen shot to a file
    function writeScreenShot(data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
			// take a screen shot current window
		    browser.takeScreenshot().then(function (png) {
		        writeScreenShot(png, 'calculator.png');
		    });
	});
	afterEach(function() {
	    console.log("Test is completed");
	  });
});