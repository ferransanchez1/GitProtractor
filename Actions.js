//Actions performed in IU Angular web app
describe('Actions demo',function(){
	
	it('Open Posse website',function(){
		browser.get('http://posse.com/')
		//Search "river" in "London" and select the down option and press enter
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();

		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
				{
			browser.sleep(4000);
			//Count the link results. There are 7 rivers.
			expect(element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']")).count()).toEqual(7);
			//Select the first river result and click on River Island link page.
			element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']")).get(0).click();
			element(by.css("a[ng-href='/place/GB/London/River Island']")).click().then(function()
					{
				browser.getTitle().then(function(title){
					console.log(title+" title of Home page before switching");	
					})
					
				browser.getAllWindowHandles().then(function(handles)
						{
					browser.switchTo().window(handles[1]);
					browser.getTitle().then(function(title){
					console.log(title+" title of the page after switching");	
					})
					browser.switchTo().window(handles[0]);
					browser.sleep(5000)
					browser.getTitle().then(function(title){
					console.log(title+" title of the page after 2th switching");	
					})
					browser.switchTo().window(handles[1]);
					browser.getTitle().then(function(title){
					console.log(title+" title of the page after 3th switching");
					browser.sleep(5000)
					})
					})
					})
				})
	})
})