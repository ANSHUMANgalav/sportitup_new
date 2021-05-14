package com.iiitb.sportitup.repository;

import com.iiitb.sportitup.bean.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VenueRepository extends JpaRepository<Venue,Integer> {
}
