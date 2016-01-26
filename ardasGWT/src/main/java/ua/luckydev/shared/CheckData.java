package ua.luckydev.shared;

import org.apache.commons.codec.digest.DigestUtils;

public class CheckData {

    public boolean checkData(String salt, String password, String passwordEncodeFromDB){
        String passwordEncodeFromServer = encode(salt, password);
        boolean res = (passwordEncodeFromDB.equals(passwordEncodeFromServer));
        return res;
    }

    public String encode (String salt, String password ) {
        String md5HexSalt = DigestUtils.md5Hex(salt);
        String md5HexPas = DigestUtils.md5Hex(password);
        String passwordEncodeFromServer = DigestUtils.md5Hex(md5HexSalt+md5HexPas);

        return passwordEncodeFromServer;
    }
}
