describe('angularjs homepage todo list', function() {
	
	it('Open angular js website', function() {

		browser.get('https://angularjs.org/');
		browser.get('http://juliemr.github.io/protractor-demo/').then(function()
		{
			console.log("I am the last step to execute");
		})
		
	});
});