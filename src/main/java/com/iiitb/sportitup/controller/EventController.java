package com.iiitb.sportitup.controller;

import com.iiitb.sportitup.bean.Event;
import com.iiitb.sportitup.service.EventService;
import com.iiitb.sportitup.service.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@CrossOrigin(origins= "*")
@RestController
@RequestMapping("api")
public class EventController {
    private EventService eventService;

    @Autowired
    public EventController(EventService theEventService){
        eventService = theEventService;
    }
    @GetMapping("/event")
    public List<Event> getEvent(){
        return eventService.getEvent();
    }
//    @GetMapping("/eventda/{date}")
//    public List<Event> getEventda(@PathVariable Date date){
//        return eventService.getEventda(date);
//    }



    @PostMapping("/event")
    public Event createEvent(@RequestBody Event event)  //mapping the JSON Body tot he object directly
    {
        return eventService.createEvent(event);
    }
}

