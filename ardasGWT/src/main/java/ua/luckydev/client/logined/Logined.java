package ua.luckydev.client.logined;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import ua.luckydev.client.ArdasMessages;
import ua.luckydev.client.MainRpcService;

import java.util.Date;
import java.util.logging.Logger;

public class Logined extends Composite
{

    public final Logger logger = Logger.getLogger(Logined.class.getName());

    interface LoginedUiBinder extends UiBinder<HTMLPanel, Logined>
    {
    }

    private static LoginedUiBinder ourUiBinder = GWT.create(LoginedUiBinder.class);
    private static ArdasMessages constants = (ArdasMessages) GWT.create(ArdasMessages.class);

    @UiField
    static Label helloMessage;
    @UiField
    static Anchor logout;

    @UiField(provided = true)
    final LoginedResources loginedRes;


    public Logined()
    {
        this.loginedRes = GWT.create(LoginedResources.class);
        loginedRes.style().ensureInjected();
        initWidget(ourUiBinder.createAndBindUi(this));

        logout.setText(constants.logout());
        setHelloMessage();
    }

    public void setHelloMessage()
    {
        MainRpcService.Util.getInstance().getUserNameFromSession(new AsyncCallback<String>()
        {
            @Override
            public void onFailure(Throwable caught)
            {
                Window.alert(caught.getMessage());
            }

            @Override
            public void onSuccess(String s)
            {
                String good = constants.good();

                String stringHours = DateTimeFormat.getFormat("HH").format(new Date());
                Integer currentHours = new Integer(stringHours);

                String timeOfDay = getTimeOfDay(currentHours);
                String timeOfDayTranslated = translateTimeOfDay(timeOfDay);

                String helloMes = good + timeOfDayTranslated + ", " + s;
                helloMessage.setText(helloMes);
            }
        }

        );
        logger.info("setHelloMessage()");
    }

    public String translateTimeOfDay(String timeOfDay)
    {
        if (timeOfDay.equals("morning"))
        {
            timeOfDay = getConstants().morning();
        } else if (timeOfDay.equals("day"))
        {
            timeOfDay = getConstants().day();
        } else if (timeOfDay.equals("evening"))
        {
            timeOfDay = getConstants().evening();
        }
        else timeOfDay = "invalid data";

        logger.info("translateTimeOfDay(String timeOfDay)");

        return timeOfDay;
    }

    public String getTimeOfDay(int currentHour) {

        String timeOfDay;

        if (currentHour >= 6 && currentHour < 9) timeOfDay = "morning";
        else if (currentHour >= 9 && currentHour < 19) timeOfDay = "day";
        else if (currentHour >= 19 && currentHour < 23) timeOfDay = "evening";
        else timeOfDay = "night";

        logger.info("getTimeOfDay(int currentHour)");

        return timeOfDay;
    }

    @UiHandler("logout")
    void onMyScriptedAnchorClick(ClickEvent event)
    {
        MainRpcService.Util.getInstance().logout(new AsyncCallback<Void>()
        {
            @Override
            public void onFailure(Throwable caught)
            {

            }

            @Override
            public void onSuccess(Void result)
            {
                Window.Location.reload();
            }
        });

        logger.info("onMyScriptedAnchorClick(ClickEvent event)");
    }

    public static ArdasMessages getConstants()
    {
        return constants;
    }
}


