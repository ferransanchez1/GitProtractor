describe('Protractor element Demo', function() {
	
	it('Locators', function() {

		browser.waitForAngularEnabled(false);
		browser.get('https://www.google.es/');
		browser.findElement(by.className("gLFyf gsfi")).sendKeys("Black Friday");
		// Press key ENTER to search
		var enter = browser.actions().sendKeys(protractor.Key.ENTER);
		enter.perform();
		
		browser.sleep(5000);
			
	});
});