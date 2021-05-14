package com.iiitb.sportitup.repository;

import com.iiitb.sportitup.bean.Activity;
import com.iiitb.sportitup.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<Activity,Integer>  {
}
