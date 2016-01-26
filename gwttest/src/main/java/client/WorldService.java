package client;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.google.gwt.core.client.GWT;

/**
 * Created by Lucky on 17.01.2016.
 */
@RemoteServiceRelativePath("WorldService")
public interface WorldService extends RemoteService {
    /**
     * Utility/Convenience class.
     * Use WorldService.App.getInstance() to access static instance of WorldServiceAsync
     */
    public static class Util {
        private static final WorldServiceAsync ourInstance = (WorldServiceAsync) GWT.create(WorldService.class);

        public static WorldServiceAsync getInstance() {
            return ourInstance;
        }
    }

    public String getDefinition(String text);

}
