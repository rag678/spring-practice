package com.example.assetManage.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class category {
    @Id
    private long id;
    private long p_id;
    private String name;
    private long number;

    public category() {
    }

    public category(long id, long p_id, String name, long number) {
        this.id = id;
        this.p_id = p_id;
        this.name = name;
        this.number = number;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getP_id() {
        return p_id;
    }

    public void setP_id(long p_id) {
        this.p_id = p_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getNumber() {
        return number;
    }

    public void setNumber(long number) {
        this.number = number;
    }
}
