package ua.luckydev.client.footer;

        import com.google.gwt.core.client.GWT;
        import com.google.gwt.uibinder.client.UiBinder;
        import com.google.gwt.uibinder.client.UiField;
        import com.google.gwt.user.client.ui.Composite;
        import com.google.gwt.user.client.ui.HTMLPanel;
        import com.google.gwt.user.client.ui.Label;
        import ua.luckydev.client.login.LoginResources;

        import java.util.logging.Logger;

public class Footer extends Composite {

    interface footerUiBinder extends UiBinder<HTMLPanel, Footer> {
    }

    private static footerUiBinder ourUiBinder = GWT.create(footerUiBinder.class);

    public Footer() {
        this.res = GWT.create(LoginResources.class);
        res.style().ensureInjected();
        initWidget(ourUiBinder.createAndBindUi(this));
    }

    @UiField(provided = true)
    final LoginResources res;
}