package com.iiitb.sportitup;

import com.iiitb.sportitup.bean.Activity;
import com.iiitb.sportitup.bean.User;
import com.iiitb.sportitup.bean.Venue;
import com.iiitb.sportitup.repository.ActivityRepository;
import com.iiitb.sportitup.repository.UserRepository;
import com.iiitb.sportitup.repository.VenueRepository;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class SportitupApplicationTests {

    @Autowired
    private VenueRepository venueRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ActivityRepository activityRepository;

    @Test
    public void deleteTest(){
        Venue venue = new Venue("Decathlon Sports complex","Whitefield",100,"table tennis","home/nihar");
        venueRepository.save(venue);
        int id=0;
        List<Venue> venueList = venueRepository.findAll();
        for(int i=0;i<venueList.size();i++)
        {
            if(venueList.get(i).getVenue_id() == venue.getVenue_id()){
                id = venueList.get(i).getVenue_id();
                venueRepository.deleteById(venueList.get(i).getVenue_id());
                break;
            }
        }
        Assert.assertFalse(venueRepository.findById(id).isPresent());
    }

    @Test
    public void saveUserTest(){
        List<User> userList = userRepository.findAll();
        User user = new User("Corona","Virus","covid@gmail.com",909,"password",false);
        User saved_user=userRepository.save(user);
        Assert.assertTrue(userRepository.findById(saved_user.getUser_id()).isPresent());
        userRepository.deleteById(saved_user.getUser_id());
    }

    @Test
    public void findActivityTest(){
        List<User> userList = userRepository.findAll();
        Assert.assertTrue(userRepository.findById(userList.get(0).getUser_id()).isPresent());
    }


}
