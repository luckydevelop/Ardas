package client;

import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * Created by Lucky on 17.01.2016.
 */
public interface WorldServiceAsync {
    void getDefinition(String text, AsyncCallback<String> async);
}
