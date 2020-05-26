package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;

public class SmokeTest {
	
	WebDriver driver;
	@Given("^Open chrome and start application$")
	public void open_chrome_and_start_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver","./Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
		driver.manage().window().maximize();
	    
	}

	@When("^I enter valid \"([^\"]*)\" and valis \"([^\"]*)\"$")
	public void i_enter_valid_and_valis(String Uname, String Password) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(Uname);
		driver.findElement(By.id("pass")).sendKeys(Password);
		
		
	   
	}

	@Then("^user should be login successfully$")
	public void user_should_be_login_successfully() throws Throwable {
		driver.findElement(By.id("u_0_b")).click();
		

	}
	@Then("^Application should be closed$")
	public void application_should_be_closed() throws Throwable {
		driver.close();
	}




}
