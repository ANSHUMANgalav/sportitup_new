package com.iiitb.sportitup.controller;

import com.iiitb.sportitup.bean.User;
import com.iiitb.sportitup.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins= "*")
@RestController
@RequestMapping("api")
public class UserController {


    private UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public List<User> getUsers() {
        return userService.getUsers();
    }


    @PostMapping("/user")
    public User createUser(@RequestBody User user)  //mapping the JSON Body tot he object directly
    {
        return userService.createUser(user);
    }


    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id)
    {
        return userService.getUserById(id);

    }

    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User user)
    {
        return userService.updateUser(id,user);
    }

    @PostMapping("/user/login")
    public ResponseEntity<User> login(@RequestBody User user){


        String email = user.getEmailId();
        String pass = user.getPassword();
        System.out.println("email"+ email+" "+pass);
        User loggedIn = userService.getUserByEmailId(email);
        //System.out.println("Size" + li.size());

        if(loggedIn.getEmailId().equals(email) && loggedIn.getPassword().equals(pass)){
            System.out.println("Password Matched");
//               System.out.println("flag after:"+ check.isLog_status());
            return ResponseEntity.ok(loggedIn);
        }

        return null;
    }
}