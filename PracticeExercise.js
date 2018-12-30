describe('Protractor Alert steps', function() {
	
	it('Open NonAngular js website Alerts', function() {

		browser.get('https://qaclickacademy.github.io/protocommerce/');
		browser.manage().window().maximize();
		element(by.name("name")).sendKeys("Mystudents");
		element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password2");
		element(by.css("input[type='checkbox']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.buttonText("Submit")).click().then(function()
				{
		//Verify the message is success
		element(by.css("div[class*='success']")).getText().then(function(text)
				{
			console.log(text);
			expect(text).toContain("Success! The Form has been submitted successfully!.");
				});
				});
				// Verify the error message displayed is correct.
				element(by.name("name")).clear();
				element(by.name("name")).sendKeys("M").then(function()
				{	
					element(by.css("div[class='alert alert-danger']")).getText().then(function(text)
					{
						console.log(text);
						expect(text).toContain("Name should be at least 2 characters");
					});
				});
				//Go to Shop page
				element(by.linkText("Shop")).click();
				//Take the four cards (images) into list
				element.all(by.tagName("app-card")).each(function(item)
						{
					item.element(by.css("h4[class='card-title'] a")).getText().then(function(text)
							{
						//Select only one "Samsung Note 8" card and add to cart.
						if(text=="Samsung Note 8")
							{							
						console.log(text);
						item.element(by.css("button[class*='btn-info']")).click();
							}
						})
						})
						//Checkout cart verification.
						element(by.partialLinkText("Checkout")).getText().then(function(text)
						{
					console.log(text);
					//Verfify the number for checkout is (Checkout ( 1 ) -> Note .trim() is used remove spaces.
					var res=text.split("(");
					expect(res[1].trim().charAt(0)).toBe("1");
						})
				browser.sleep(7000);
	})
})