package com.BasicTests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class ConditionalCommand {

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver","./Drivers/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
		WebElement Email=driver.findElement(By.id("email"));
		WebElement password=driver.findElement(By.id("pass"));
		if(Email.isDisplayed()&&Email.isEnabled()) {
			Email.sendKeys("sohel@gmail.com");
		}
		if(password.isDisplayed()&&password.isEnabled()) {
			password.sendKeys("abc123");
		}
		System.out.println(driver.findElement(By.xpath("//*[@id=\"u_0_9\"]")).isSelected());
		System.out.println(driver.findElement(By.id("u_0_a")).isSelected());
		if(driver.findElement(By.xpath("//*[@id=\"u_0_9\"]")).isSelected()==false){
			driver.findElement(By.id("u_0_9")).click();
		}

	}

}
