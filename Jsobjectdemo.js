/**
 * http://usejsdoc.org/
 */
//Function for object definition
function car()
{
	this.color="red";
	this.engine="turbo";
	this.brand="BMW";
	this.search="by.css('input)";
	this.getModel=function()
	{
		console.log("this is 2020 model");
		console.log("These data are from page object model");
	};
};

module.exports=new car();
/*var a= new car();
a.getModel();*/