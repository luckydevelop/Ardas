package ua.luckydev.client;


import com.google.gwt.core.shared.GWT;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import ua.luckydev.shared.Users;
import ua.luckydev.shared.LoginedUser;


@RemoteServiceRelativePath("gwtArdas")
public interface MainRpcService extends RemoteService {

    boolean checkData(String login, String password);

    Users getUser(String log);

    public static class Util
    {
        private static MainRpcServiceAsync instance;

        public static MainRpcServiceAsync getInstance()
        {
            if (instance == null)
            {
                instance = GWT.create(MainRpcService.class);
            }
            return instance;
        }
    }

    LoginedUser loginServer(String login);

    LoginedUser loginFromSessionServer();

    String getUserNameFromSession();

    void logout();
}