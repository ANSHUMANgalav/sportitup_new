package com.iiitb.sportitup.bean;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int event_id;
    @Column
    private String event_title;
    @Column
    private String event_detail;
    @Column
    private String img_link;
    @Column
    private Date event_date;

    public String getEvent_title() {
        return event_title;
    }

    public void setEvent_title(String event_title) {
        this.event_title = event_title;
    }

    public String getEvent_detail() {
        return event_detail;
    }

    public void setEvent_detail(String event_detail) {
        this.event_detail = event_detail;
    }

    public String getImg_link() {
        return img_link;
    }

    public void setImg_link(String img_link) {
        this.img_link = img_link;
    }

    public Date getEvent_date() {
        return event_date;
    }

    public void setEvent_date(Date event_date) {
        this.event_date = event_date;
    }

    public int getEvent_id() {
        return event_id;
    }

    public void setEvent_id(int event_id) {
        this.event_id = event_id;
    }

    public Event(String event_title, String event_detail, String img_link, Date event_date) {
        this.event_title = event_title;
        this.event_detail = event_detail;
        this.img_link = img_link;
        this.event_date = event_date;
    }
}
