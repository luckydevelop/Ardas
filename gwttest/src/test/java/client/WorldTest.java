package client;


import com.google.gwt.junit.client.GWTTestCase;
import com.google.gwt.user.client.Timer;



public class WorldTest extends GWTTestCase {

    public String getModuleName() {
        return "World";
    }

        public void testDefinitionValue() throws Exception {
        final World module = new World();
        module.getDefinition("911");
        Timer timer = new Timer() {
            public void run() {
                String value = module.getOutputLabel().getText();
                String control = "Ok";
                assertEquals("should be " + control, control, value);
                finishTest();
            }
        };
        timer.schedule(200);
        delayTestFinish(500);
    }
}