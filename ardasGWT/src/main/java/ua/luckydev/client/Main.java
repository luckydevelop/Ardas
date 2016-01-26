package ua.luckydev.client;

        import com.google.gwt.core.client.EntryPoint;
        import com.google.gwt.user.client.Cookies;
        import com.google.gwt.user.client.rpc.AsyncCallback;
        import com.google.gwt.user.client.ui.*;
        import ua.luckydev.client.footer.Footer;
        import ua.luckydev.client.header.Header;
        import ua.luckydev.client.login.LoginViewImpl;
        import ua.luckydev.client.logined.Logined;
        import ua.luckydev.shared.LoginedUser;

        import java.util.logging.Logger;


public class Main implements EntryPoint
{

    public final Logger logger = Logger.getLogger(Main.class.getName());


    private void displayHeaderFooter()
    {
        final Header header = new Header();
        final Footer footer = new Footer();
        RootPanel.get("headerImg").add(header);
        RootPanel.get("footer").add(footer);
        logger.info("Add headerImg and footer to RootPanel");
    }

    private void displayLogined()
    {
        final Logined logined = new Logined();
        RootPanel.get("main").add(logined);
        logger.info("Add logined to RootPanel");
    }


    private void displayNotLogined()
    {
        final LoginViewImpl loginView = new LoginViewImpl();
        RootPanel.get("main").add(loginView);
        logger.info("Add loginView to RootPanel");
    }


    public void onModuleLoad()
    {
        String sessionID = Cookies.getCookie("sid");
        if (sessionID == null)
        {
            displayHeaderFooter();
            displayNotLogined();
            logger.info("display header and footer");
        } else
        {
            checkWithServerIfSessionIdIsStillLegal();
            logger.info("checkWithServerIfSessionIdIsStillLegal");
        }
    }

    private void checkWithServerIfSessionIdIsStillLegal()
    {
        MainRpcService.Util.getInstance().loginFromSessionServer(new AsyncCallback<LoginedUser>()
        {
            @Override
            public void onFailure(Throwable caught)
            {
                displayHeaderFooter();
                displayNotLogined();
                logger.info("onFailure - display notLogined header and footer");
            }

            @Override
            public void onSuccess(LoginedUser result)
            {
                if (result == null)
                {
                    displayHeaderFooter();
                    displayNotLogined();
                    logger.info("result == null - display notLogined header and footer");
                } else
                {
                    if (result.getLoggedIn())
                    {
                        displayHeaderFooter();
                        displayLogined();
                        logger.info("display logined view with heade and footer");

                    } else
                    {
                        displayHeaderFooter();
                        displayNotLogined();
                        logger.info("result.getLoggedIn()=false - display notLogined header and footer");
                    }
                }
            }
        });
    }
}