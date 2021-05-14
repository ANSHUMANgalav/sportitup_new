package com.iiitb.sportitup;

import com.iiitb.sportitup.bean.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

@SpringBootApplication
public class SportitupApplication {

    public static void main(String[] args) {



        User user = new User();
        user.setAdminFlag(false);
        user.setContactNumber(9464);
        user.setEmailId("vvv@vvv");
        user.setFirstName("anshuman");
        user.setLastName("galav");
        user.setUser_id(2);
        user.setPassword("456456");
        //Session currentSession = entityManager.unwrap(Session.class);




        SpringApplication.run(SportitupApplication.class, args);
    }

}
