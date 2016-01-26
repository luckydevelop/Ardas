package ua.luckydev.client.logined;

import com.google.gwtmockito.GwtMockitoTestRunner;
import org.junit.Test;
import org.junit.Before;
import org.junit.runner.RunWith;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.not;
import static junit.framework.Assert.assertEquals;
import static org.junit.Assert.assertThat;


@RunWith(GwtMockitoTestRunner.class)
public class LoginedTest {

   private Logined logined;

   @Before
    public void setUp() {
        logined = new Logined();
    }

    @Test
    public void testGetTimeOfDay() {

        assertEquals("Must be morning", "morning", logined.getTimeOfDay(6));
        assertEquals("Must be morning", "morning", logined.getTimeOfDay(8));
        assertThat(logined.getTimeOfDay(10), not(equalTo("morning")));
        assertThat(logined.getTimeOfDay(4), not(equalTo("morning")));

        assertEquals("Must be day", "day", logined.getTimeOfDay(9));
        assertEquals("Must be day", "day", logined.getTimeOfDay(18));
        assertThat(logined.getTimeOfDay(7), not(equalTo("day")));
        assertThat(logined.getTimeOfDay(20), not(equalTo("day")));

        assertEquals("Must be evening", "evening", logined.getTimeOfDay(19));
        assertEquals("Must be evening", "evening", logined.getTimeOfDay(22));
        assertThat(logined.getTimeOfDay(17), not(equalTo("evening")));
        assertThat(logined.getTimeOfDay(11), not(equalTo("evening")));

        assertEquals("Must be night", "night", logined.getTimeOfDay(23));
        assertEquals("Must be night", "night", logined.getTimeOfDay(5));
        assertThat(logined.getTimeOfDay(21), not(equalTo("night")));
        assertThat(logined.getTimeOfDay(7), not(equalTo("night")));
    }
}


