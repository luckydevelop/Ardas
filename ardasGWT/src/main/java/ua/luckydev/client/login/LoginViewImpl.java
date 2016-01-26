package ua.luckydev.client.login;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyDownEvent;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.uibinder.client.UiTemplate;
import com.google.gwt.user.client.Cookies;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.*;
import ua.luckydev.client.MainRpcService;
import ua.luckydev.client.logined.Logined;
import ua.luckydev.client.ArdasMessages;
import ua.luckydev.shared.LoginedUser;

import java.util.Date;
import java.util.logging.Logger;

public class LoginViewImpl extends Composite  {

    @UiTemplate("LoginViewImpl.ui.xml")
    interface LoginUiBinder extends UiBinder<Widget, LoginViewImpl> {
    }
    private static LoginUiBinder uiBinder = GWT.create(LoginUiBinder.class);

    ArdasMessages constants = (ArdasMessages) GWT.create(ArdasMessages.class);

    @UiField
    Label user;
    @UiField
    Label password;
    @UiField
    Button buttonSubmit;
    @UiField
    TextBox loginBox;
    @UiField
    PasswordTextBox passwordBox;
    @UiField
    Label wrongLogin;
    @UiField
    Label wrongPassword;
    @UiField(provided = true)
    final LoginResources res;

    private Boolean tooShort = false;

    public final Logger logger = Logger.getLogger(LoginViewImpl.class.getName());

    public LoginViewImpl() {
        this.res = GWT.create(LoginResources.class);
        res.style().ensureInjected();
        initWidget(uiBinder.createAndBindUi(this));
        user.setText(constants.user());
        password.setText(constants.password());
        buttonSubmit.setText(constants.login());
    }

    @UiHandler("buttonSubmit")
    void doClickSubmit(ClickEvent event) {
        logger.info("buttonSubmit");
        if(tooShort) return;
        else checkData(loginBox.getValue(), passwordBox.getValue());
       checkData(loginBox.getValue(), passwordBox.getValue());


    }

    @UiHandler("passwordBox")
    void handlePasswordKeyboardKey(KeyDownEvent event) {
        if (event.getNativeKeyCode() == KeyCodes.KEY_ENTER) {
            if(tooShort) return;
            else checkData(loginBox.getValue(), passwordBox.getValue());
            logger.info("Enter Submit in passwordBox");
        }

    }

    @UiHandler("loginBox")
    void handleLoginKeyboardKey(KeyDownEvent event) {
        if (event.getNativeKeyCode() == KeyCodes.KEY_ENTER) {
            if(tooShort) return;
            else checkData(loginBox.getValue(), passwordBox.getValue());
            logger.info("Enter Submit in loginBox");
        }

    }

    @UiHandler("loginBox")
    void handleLoginChange(ValueChangeEvent<String> event) {
        if (event.getValue().length() < 2) {
            wrongLogin.setText("Логин слишком короткий (Должен быть > 2)");
            tooShort = true;
        } else {
            tooShort = false;
            wrongLogin.setText("");
        }
    }

    @UiHandler("passwordBox")
    void handlePasswordChange(ValueChangeEvent<String> event) {
        if (event.getValue().length() < 2) {
            tooShort = true;
            wrongPassword.setText("Пароль слишком короткий (Должен быть > 2)");
        } else {
            tooShort = false;
            wrongPassword.setText("");
        }
    }

    public void checkData(String login, String password)
    {
        logger.info("checkData");
        MainRpcService.Util.getInstance().checkData(login, password, new AsyncCallback<Boolean>() {
            @Override
            public void onFailure(Throwable caught) {
                wrongPassword.setText(constants.error());
            }

            @Override
            public void onSuccess(Boolean result) {
                    saveUserInSession();
            }
        });
    }

    public void saveUserInSession()
    {
        logger.info("saveUserInSession");
        MainRpcService.Util.getInstance().loginServer(loginBox.getText(), new AsyncCallback<LoginedUser>()
        {
            @Override
            public void onSuccess(LoginedUser result)
            {
                if (result.getLoggedIn())
                {
                    logger.info("loginServer onSuccess add logined view to RootPanel");
                    final Logined logined = new Logined();
                    RootPanel.get("main").clear();
                    RootPanel.get("main").add(logined);

                    //set session cookie for 1 day expiry.
                    String sessionID = result.getSessionId();
                    final long DURATION = 1000 * 60 * 60 * 24 * 1;
                    Date expires = new Date(System.currentTimeMillis() + DURATION);
                    Cookies.setCookie("sid", sessionID, expires, null, "/", false);
                } else
                {
                    logger.info("result.getLoggedIn() false");
                }
            }

            @Override
            public void onFailure(Throwable caught)
            {
                logger.info("saveUserInSession onFailure");
            }
        });
    }
}