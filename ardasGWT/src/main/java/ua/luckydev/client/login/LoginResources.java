package ua.luckydev.client.login;
import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.ImageResource;

/**
 * Created by Nick on 06.11.2015.
 */
public interface LoginResources extends ClientBundle  {
    /**
     * Sample CssResource.
     */
    public interface MyCss extends CssResource {
        String bottom();

        String root();

        String cell();

        String redText();

        String loginButton();

        String box();
    }

    @Source("Login.css")
    MyCss style();

    @Source("../../shared/img/logo.png")
    ImageResource logo();
}
