package com.iiitb.sportitup.repository;

import com.iiitb.sportitup.bean.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking,Integer>  {

     List<Booking> findBookingsByUser_userId(int uId);

}
