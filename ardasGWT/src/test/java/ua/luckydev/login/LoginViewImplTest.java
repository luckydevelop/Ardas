package ua.luckydev.login;


import com.google.gwt.junit.client.GWTTestCase;
import com.google.gwt.user.client.Timer;
import ua.luckydev.client.login.LoginViewImpl;

public class LoginViewImplTest extends GWTTestCase
{
    public String getModuleName() {
        return "ua.luckydev.Main";
    }

    public void testDefinitionValue() throws Exception {

        LoginViewImpl loginView = new LoginViewImpl();

        assertFalse(loginView.checkData);

//        final World module = new World();
//        module.getDefinition("911");
//        Timer timer = new Timer() {
//            public void run() {
//                String value = module.getOutputLabel().getText();
//                String control = "Ok";
//                assertEquals("should be " + control, control, value);
//                finishTest();
//            }
//        };
//        timer.schedule(200);
//        delayTestFinish(500);
    }
}
