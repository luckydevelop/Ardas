package ua.luckydev.client.logined;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;


public interface LoginedResources extends ClientBundle  {

    public interface MyCss extends CssResource {
        String text();
    }

    @Source("Logined.css")
    MyCss style();

}
