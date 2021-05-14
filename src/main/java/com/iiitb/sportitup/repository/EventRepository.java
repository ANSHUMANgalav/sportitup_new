package com.iiitb.sportitup.repository;

import com.iiitb.sportitup.bean.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Integer> {


//    List<Event> findEventByEvent_dateAfter(Date date);
}
