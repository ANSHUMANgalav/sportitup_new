package com.iiitb.sportitup.repository;

import com.iiitb.sportitup.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    @Query(value = "SELECT * FROM user u WHERE u.email_id=:emailid", nativeQuery = true)
    public User findByEmailId(@Param("emailid") String emailid);
}