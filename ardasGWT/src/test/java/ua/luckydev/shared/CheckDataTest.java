package ua.luckydev.shared;


import org.junit.Test;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.*;


public class CheckDataTest
{

    CheckData checkData = new CheckData();

    @Test
     public void testEncode()
    {
        String salt = "[8w5hK0n";
        String password = "secret";
        String encodePassword = "89ea803a874ba5773c77b267a5368db5";

        assertEquals("must be -89ea803a874ba5773c77b267a5368db5 ", encodePassword, checkData.encode(salt, password));
        assertThat(checkData.encode(salt, password), equalTo(encodePassword));
        assertThat(checkData.encode(salt, password), not(equalTo("211234wsgdfg")));
    }

    @Test
    public void testCheckData()
    {
        String salt = "[8w5hK0n";
        String password = "secret";
        String encodePassword = "89ea803a874ba5773c77b267a5368db5";

        assertTrue(checkData.checkData(salt, password, encodePassword));
        assertFalse(checkData.checkData("salt", password, encodePassword));
        assertFalse(checkData.checkData(salt, "password", encodePassword));
        assertFalse(checkData.checkData(salt, password, "encodePassword"));
    }
}
