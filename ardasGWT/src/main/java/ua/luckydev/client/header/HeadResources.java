package ua.luckydev.client.header;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.ImageResource;

public interface HeadResources extends ClientBundle  {

    public interface MyCss extends CssResource {
        String img();
    }

    @Source("Header.css")
    MyCss style();

    @Source("../../shared/img/logo.png")
    ImageResource logo();
}
