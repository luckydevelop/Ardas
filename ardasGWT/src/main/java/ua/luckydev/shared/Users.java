package ua.luckydev.shared;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "users", schema = "ardas")
public class Users implements Serializable{

    @Id
    @Column
    private int id;

    @Column
    private String name;

    @Column
    private String login;

    @Column
    private String password;

    @Column
    private String salt;


    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getLogin()
    {
        return login;
    }

    public void setLogin(String login)
    {
        this.login = login;
    }

    public String getSalt()
    {
        return salt;
    }

    public void setSalt(String salt)
    {
        this.salt = salt;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }
}
