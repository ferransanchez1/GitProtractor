function  PageObjectCalc()
//Page object for use in java script file.
{
this.getURL=function()
{
	browser.get('http://juliemr.github.io/protractor-demo/');
};

this.firstinput=element(by.model("first"));

this.secondinput=element(by.model("second"));
this.goButton=element(by.id("gobutton"));
this.result=element(by.css("h2[class='ng-binding']"));
};

module.exports= new PageObjectCalc();
