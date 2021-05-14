package com.iiitb.sportitup.controller;

import com.iiitb.sportitup.bean.User;
import com.iiitb.sportitup.bean.Venue;
import com.iiitb.sportitup.service.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins= "*")
@RestController
@RequestMapping("api")
public class VenueController {
    private VenueService venueService;

    @Autowired
    public VenueController(VenueService theVenueService){
        venueService = theVenueService;
    }
    @GetMapping("/venue")
    public List<Venue> getVenue(){
        return venueService.getVenue();
    }

    @PostMapping("/venue")
    public Venue createVenue(@RequestBody Venue venue)  //mapping the JSON Body tot he object directly
    {
        return venueService.createVenue(venue);
    }
}
