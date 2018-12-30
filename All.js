// Example for "all" locator and count whole lines
describe('Protractor Super Calculator', function() {
	function Add(a,b)
	{
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	it('Locators', function() {

		browser.get('http://juliemr.github.io/protractor-demo/');
		
		Add(2,2);//The result is 4
		Add(5,3);//The result is 8
		Add(4,2);//The result is 6
		Add(3,2);//The result is 5
		Add(5,1);//The result is 6
		Add(6,2);//The result is 8
		Add(7,2);//The result is 9
			
			// Count the lines of operation results (3 is the log result)
			element.all(by.repeater("result in memory")).count().then(function(text)
					{
				console.log("Count= "+text);
					})
			//Print in console all results of each line. Log result is (8, 10, 11).
			element.all(by.repeater("result in memory")).each(function(item)
					{
				item.element(by.css("td:nth-child(3)")).getText().then(function(text)
						{
					console.log(text);
						})
				
					})
	});
});