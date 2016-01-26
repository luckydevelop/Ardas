package ua.luckydev.server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import ua.luckydev.client.MainRpcService;
import ua.luckydev.shared.CheckData;
import ua.luckydev.shared.LoginedUser;
import ua.luckydev.shared.Users;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;


public class MainRpcServiceImpl extends RemoteServiceServlet implements MainRpcService {

    private SessionFactory sessionFactory;
    private Session session;
    private List usersList = new ArrayList<>();
    public final Logger logger = Logger.getLogger(MainRpcServiceImpl.class.getName());

    @Override
    public boolean checkData(String login, String password) {
        Users currentUser = getUser(login);

        String salt = currentUser.getSalt();
        String passwordEncodeFromDB = currentUser.getPassword();
        boolean isUserOk = new CheckData().checkData(salt, password, passwordEncodeFromDB);
        logger.info("checkData on server");
        return isUserOk;
    }

    @Override
    public Users getUser(String log) {
        sessionFactory = HibernateUtil.getSessionFactory();
        session = sessionFactory.openSession();
        Query query =  session.createQuery("from Users where login = :log");
        query.setParameter("log", log);
        usersList = query.list();
        logger.info("getUser on server");
        return (Users)usersList.get(0);
    }

    @Override
    public LoginedUser loginServer(String login) {
       Users currentUser = getUser(login);

        //store the user/session id
        LoginedUser loginedUser = new LoginedUser();
        loginedUser.setLogin(login);
        loginedUser.setName(currentUser.getName());

       // loginedUser.setPassword(password);
        HttpServletRequest httpServletRequest = this.getThreadLocalRequest();
        HttpSession session = httpServletRequest.getSession(true);
        loginedUser.setSessionId(session.getId());
        session.setAttribute("user", loginedUser);
        loginedUser.setLoggedIn(true);

        logger.info("loginServer(String login) on server");
         return loginedUser;
    }

    @Override
    public LoginedUser loginFromSessionServer() {
        LoginedUser user = null;
        HttpServletRequest httpServletRequest = this.getThreadLocalRequest();
        HttpSession session = httpServletRequest.getSession();
        Object userObj = session.getAttribute("user");
        if (userObj != null && userObj instanceof LoginedUser)
        {
            user = (LoginedUser) userObj;
        }

        logger.info("loginFromSessionServer() on server");

        return user;
    }

    @Override
    public String getUserNameFromSession()
    {
        LoginedUser user = loginFromSessionServer();
        logger.info("getUserNameFromSession() on server");

        return user.getName();
    }

    @Override
    public void logout() {
        HttpServletRequest httpServletRequest = this.getThreadLocalRequest();
        HttpSession session = httpServletRequest.getSession();
        session.removeAttribute("user");
        logger.info("logout() on server");
    }
}