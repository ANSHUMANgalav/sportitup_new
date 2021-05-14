package com.iiitb.sportitup.service;

import com.iiitb.sportitup.bean.Event;
import com.iiitb.sportitup.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {
    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository theEventRepository){
        eventRepository = theEventRepository;

    }
    public List<Event> getEvent(){
        List<Event> eventList = new ArrayList<>();
        eventRepository.findAll().forEach(eventList::add);
        return eventList;
    }
//    public List<Event> getEventda(Date date){
//        List<Event> eventList = new ArrayList<>();
//        eventRepository.findEventByEvent_dateAfter(date).forEach(eventList::add);
//        return eventList;
//    }

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }
}
