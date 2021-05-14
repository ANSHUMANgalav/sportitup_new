package com.iiitb.sportitup.service;

import com.iiitb.sportitup.bean.User;
import com.iiitb.sportitup.exception.ResourceNotFoundException;
import com.iiitb.sportitup.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        List<User> userList = new ArrayList<>();
        userRepository.findAll().forEach(userList::add);
        return userList;    //convert iterable class to List collection and return
    }

    public User  createUser(User user)
    {
        return userRepository.save(user);
    }

    public ResponseEntity<User> getUserById(Integer id){

        User user= userRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Employee not exists with id:"+id));

        return ResponseEntity.ok(user);  //entity is returned along with the status
    }

    public ResponseEntity<User> updateUser(Integer id, User userDetails)
    {
        User user= userRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Employee not exists with id:"+id));

        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setContactNumber(userDetails.getContactNumber());
        user.setEmailId(userDetails.getEmailId());
        user.setPassword(userDetails.getPassword());
        user.setAdminFlag(userDetails.getAdminFlag());


        User updatedUser=userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }


    public User getUserByEmailId(String email){
        User user= userRepository.findByEmailId(email);

        return user;  //entity is returned along with the status
    }

}