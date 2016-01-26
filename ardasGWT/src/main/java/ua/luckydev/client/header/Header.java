package ua.luckydev.client.header;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;

public class Header extends Composite {
    interface footerUiBinder extends UiBinder<HTMLPanel, Header> {
    }

    private static footerUiBinder ourUiBinder = GWT.create(footerUiBinder.class);

    @UiField(provided = true)
    final HeadResources res;

    public Header() {
        this.res = GWT.create(HeadResources.class);
        res.style().ensureInjected();
        initWidget(ourUiBinder.createAndBindUi(this));
    }


}