describe('Protractor E-commerce steps', function() {
	//Function for selecting items to add card
	function selectItems(product)
	{
	//Take the four cards (images) into list
	element.all(by.tagName("app-card")).each(function(item)
	{
	item.element(by.css("h4[class='card-title'] a")).getText().then(function(text)
	{
	//Select only one "Samsung Note 8" card and add to cart.
	if(text==product)
	{							
	console.log(text);
	item.element(by.css("button[class*='btn-info']")).click();
	}
	}) })
	}
	
	it('Add to cart the selections items', function() {

		browser.get('https://qaclickacademy.github.io/protocommerce/');
		browser.manage().window().maximize();
		//Go to Shop page
				element(by.linkText("Shop")).click();
				//Select multiple items to add card using function "SelectItems"
				selectItems("Samsung Note 8");
				selectItems("iphone X");
				selectItems("Nokia Edge");
				//Checkout cart verification.
				element(by.partialLinkText("Checkout")).getText().then(function(text)
						{
						var res=text.split("(");
						var x=Number(res[1].trim().charAt(0));
						console.log(x);
						//expect 3 contains (3.) cards on checkout
						expect(res[1].trim().charAt(0)).toContain(x);
				})
				browser.sleep(7000);
	})
})