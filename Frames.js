describe('Protractor Alert steps', function() {
	
	it('Open NonAngular js website Alerts', function() {

		browser.waitForAngularEnabled(false);
		
		//maximize browser window
		browser.driver.manage().window().maximize();
		browser.get('http://www.qaclickacademy.com/practice.php');
		
		//Search the frame and to getText for href element link
		browser.switchTo().frame("courses-iframe");//frame searched by id
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			console.log(text);
		})
	})
})