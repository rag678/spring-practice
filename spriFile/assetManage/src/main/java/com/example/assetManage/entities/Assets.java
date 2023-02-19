package com.example.assetManage.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "assets")
public class assets {
    private long id;
    @Id
    private long c_id;
    private String name;
    private Date p_date;
    private String c_note;

    public assets() {
    }

    public assets(long id, long c_id, String name, Date p_date, String c_note) {
        this.id = id;
        this.c_id = c_id;
        this.name = name;
        this.p_date = p_date;
        this.c_note = c_note;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getC_id() {
        return c_id;
    }

    public void setC_id(long c_id) {
        this.c_id = c_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getP_date() {
        return p_date;
    }

    public void setP_date(Date p_date) {
        this.p_date = p_date;
    }

    public String getC_note() {
        return c_note;
    }

    public void setC_note(String c_note) {
        this.c_note = c_note;
    }
}
