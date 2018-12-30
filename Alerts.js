describe('Protractor Alert steps', function() {
	
	it('Open NonAngular js website Alerts', function() {

		browser.waitForAngularEnabled(false);
		browser.get('http://www.qaclickacademy.com/practice.php');
		element(by.id("confirmbtn")).click();
		//Accept the alert as OK
		browser.switchTo().alert().accept().then(function()
				{
			browser.sleep(5000);			
				})
				
		element(by.id("confirmbtn")).click();
		//Dismiss the alert as Cancel
		browser.switchTo().alert().dismiss().then(function()
				{
			browser.sleep(5000);			
				})
	})
})