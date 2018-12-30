var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ElementBasics2.js'],
  
  onPrepare :function()
  {
	  //browser.waitForAngularEnabled(false); -> when the webpage is non angular
	  browser.manage().window().maximize();
	  jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		        );
  	},
  	//suites to run different grouped test.
  	//example in console: npm run Smoke
  	suites: 
  		{
  		Smoke: ['Alerts.js','Dropdown.js'],
  		Regression: ['ElementBasics.js','ChainLocators.js'],
  		Sanity: ['PracticeExercise.js']
  		},
  	// Options about colors to see on htmlReport.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },
  	//browser selection
	capabilities: {
	  'browserName': 'chrome'
	}
};