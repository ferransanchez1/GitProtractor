describe('Protractor element Demo', function() {
	
	it('Locators', function() {

		browser.get('http://juliemr.github.io/protractor-demo/');
		
			element(by.model("first")).sendKeys("3");
			element(by.model("second")).sendKeys("5");
			element(by.id("gobutton")).click();
			//Verify the result
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
			//Other example of assertion to verify both numbers
			var a=8;
			expect(a).toEqual(8);

			//Search results. Use function(text) to resolve the promise to store the value.
			//by.css is tagname[attribute='value']
			element(by.css("h2[class='ng-binding']")).getText().then(function(text)
			{
				console.log(text);
				browser.sleep(5000);
			})
	});
});