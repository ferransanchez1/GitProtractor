describe('angularjs homepage todo list', function() {
	
	it('Open Non angular js website Sync', function() {

		browser.waitForAngularEnabled(false);
		browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
		
		element(by.css("a[href*='loadAjax']")).click();
		
		//declaration of expectedConditions variable
		var EC = protractor.ExpectedConditions;
		// Waits for the element with id 'loader' to be no longer visible on the image.
		browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);
		//getText and write on consola the text result
		element(by.id("results")).getText().then(function(text){
			console.log(text);
		})
	});
});