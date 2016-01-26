package server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import client.WorldService;

/**
 * Created by Lucky on 17.01.2016.
 */
public class WorldServiceImpl extends RemoteServiceServlet implements WorldService {
    public String getDefinition(String text)
    {
        if (text.equals("911"))
            return "Ok";
        else
            return "Don't Ok";
    }
}