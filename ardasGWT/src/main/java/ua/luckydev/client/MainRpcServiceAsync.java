package ua.luckydev.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import ua.luckydev.shared.LoginedUser;
import ua.luckydev.shared.Users;

public interface MainRpcServiceAsync {

    void getUser(String log, AsyncCallback<Users> async);

    void checkData(String login, String password, AsyncCallback<Boolean> async);

    void loginServer(String login, AsyncCallback<LoginedUser> async);

    void loginFromSessionServer(AsyncCallback<LoginedUser> async);

    void logout(AsyncCallback<Void> async);

    void getUserNameFromSession(AsyncCallback<String> async);
}