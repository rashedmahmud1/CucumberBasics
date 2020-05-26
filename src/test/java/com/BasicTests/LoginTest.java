package com.BasicTests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {
	
	
	public static void main(String[]args) {
		System.setProperty("webdriver.chrome.driver","./Drivers/chromedriver.exe");
		WebDriver driver= new ChromeDriver();
		driver.get("http://newtours.demoaut.com/");
		driver.manage().window().maximize();
		driver.findElement(By.name("userName")).sendKeys("mercury");
		driver.findElement(By.name("password")).sendKeys("mercury");
		driver.findElement(By.name("login")).click();
		
		String exp_title="Find a Flight: Mercury Tours:";
		String act_title=driver.getTitle();
		
		if(exp_title.equals(act_title)==true) {
			System.out.println("my test case is pass");
			}
			else 
			{
				System.out.println("my test is fail");
			}
		
		}
		
	
		
		
		
	}
	
	
	
	
	
	


