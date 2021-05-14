package com.iiitb.sportitup.service;

import com.iiitb.sportitup.bean.Activity;
import com.iiitb.sportitup.exception.ResourceNotFoundException;
import com.iiitb.sportitup.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ActivityService {

    private final ActivityRepository activityRepository;

    @Autowired
    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    public List<Activity> getAllActivity() {

        List<Activity> activityList= activityRepository.findAll();
        return activityList;    //convert iterable class to List collection and return
    }

    public Activity createActivity(Activity activity)
    {
        System.out.println(activity.toString());
        return activityRepository.save(activity);
    }
    public Activity getActivityById(Integer id){

        Activity activity= activityRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Activity not exists with id:"+id));

        return activity;  //entity is returned along with the status
    }

    public Activity joinActivity(int activity_id) {

        Activity activity = activityRepository.findById(activity_id)
                .orElseThrow(() -> new ResourceNotFoundException("Activity not exist with id :" + activity_id));

        if (activity.getJoinedPlayers() < activity.getNumberOfPlayers()) {
           int new_count= activity.getJoinedPlayers()+1;
           activity.setJoinedPlayers(new_count);

           Activity updatedActivity=activityRepository.save(activity);
           return updatedActivity;
        }
        else
            return null;
    }
}
