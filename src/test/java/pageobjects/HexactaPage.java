package pageobjects;

import Utils.Wait;
import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HexactaPage {
    private WebDriver driver;
    private WebDriverWait wait;

    //Constructor
    public HexactaPage(WebDriver browser){
        driver = browser;
        PageFactory.initElements(driver,this);
        wait = new WebDriverWait(driver,20);
    }

    //Locators
    @FindBy(xpath = "//*[@id=\"menu-social-menu\"]/li/ul/li[1]/a/span")
    WebElement btnSearch;

    @FindBy(xpath = "//*[@id=\"search-field\"]")
    WebElement textSearch;

    @FindBy(xpath = "//*[@id=\"post-18437\"]/div[2]/header/h1/a")
    WebElement textResult;

    //Actions
    public void clickBtnSearch(){
        Wait.waitClickable(driver,btnSearch,4);
        btnSearch.click();
        Wait.waitSeconds(4);
    }

    public void sendTextSearch(){
        textSearch.sendKeys("Outsource");
        textSearch.sendKeys(Keys.RETURN);

        Wait.waitSeconds(4);
    }

    public String getResult(){
        String resultado;
        resultado = textResult.getText();

        return resultado;
    }


}
