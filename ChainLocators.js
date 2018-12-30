describe('Protractor Super Calculator', function() {
	
	it('Locators', function() {

		browser.get('http://juliemr.github.io/protractor-demo/');
		
			element(by.model("first")).sendKeys("3");
			element(by.model("second")).sendKeys("5");
			//Selection of operator (+, /, %, *, -) according to child position. Four four pos is "*".
			element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
			element(by.id("gobutton")).click();
			
			element(by.repeater("result in memory")).element(by.css("td:nth-child(2)")).getText().then(function(text)
					{
				console.log(text);
					})
	});
});