package com.iiitb.sportitup.controller;

import com.iiitb.sportitup.bean.Booking;
import com.iiitb.sportitup.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins= "*")
@RestController
@RequestMapping("api")
public class BookingController {
    private BookingService bookingService;

    @Autowired
    public BookingController(BookingService theBookingService){
        bookingService = theBookingService;
    }
    @GetMapping("/booking")
    public List<Booking> getBooking(){
        return bookingService.getBooking();
    }

    @GetMapping("/booking/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Integer id)
    {
        return bookingService.getBookingById(id);

    }
    @GetMapping("/bookingbyuser/{id}")
    public List<Booking> getBookingByUId(@PathVariable Integer id)
    {
        return bookingService.getBookingByUId(id);

    }

    @PostMapping("/booking")
    public Booking createBooking(@RequestBody Booking booking)  //mapping the JSON Body tot he object directly
    {
        return bookingService.createBooking(booking);
    }
}
