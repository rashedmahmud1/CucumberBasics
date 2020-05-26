Feature: Test Facebook smoke scenario 

Scenario Outline: Test login with valid credentials 
	Given Open chrome and start application 
	When I enter valid "<Uname>" and valis "<Password>" 
	Then user should be login successfully 
	And Application should be closed
	
	Examples: 
		|Uname|Password|
		|sohel@gmail.com|Selenium@123|
		|sohel2@gmail.com|Selenium@123|
		|sohel3@gmail.com|Selenium@123|
