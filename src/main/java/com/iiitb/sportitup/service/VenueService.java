package com.iiitb.sportitup.service;

import com.iiitb.sportitup.bean.Venue;
import com.iiitb.sportitup.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VenueService {
    private final VenueRepository venueRepository;

    @Autowired
    public VenueService(VenueRepository theVenueRepository){
        venueRepository = theVenueRepository;

    }
    public List<Venue> getVenue(){
        List<Venue> venueList = new ArrayList<>();
        venueRepository.findAll().forEach(venueList::add);
        return venueList;
    }

    public Venue createVenue(Venue venue) {
        return venueRepository.save(venue);
    }
}
