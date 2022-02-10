package steps;

import Utils.TestNGSecuenciaRunner;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import pageobjects.AddProductsPage;
import pageobjects.HexactaPage;
import pageobjects.PurchasePage;

import java.util.Locale;

public class HexactaSteps extends TestNGSecuenciaRunner {

    @Given("^the customer click on the button search$")
    public void theCustomerClickOnTheButtonSearch() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get(Utils.Constants.baseURL);

        HexactaPage hs = new HexactaPage(driver);
        hs.clickBtnSearch();
        hs.sendTextSearch();

        Assert.assertEquals(hs.getResult(),"WHAT NOT TO DO WHEN WORKING WITH AN OUTSOURCED SOFTWARE TEAM");


    }
}