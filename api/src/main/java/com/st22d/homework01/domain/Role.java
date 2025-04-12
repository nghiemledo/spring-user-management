package com.st22d.homework01.domain;

import jakarta.persistence.*;

@Table(name = "ROLE")
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    public Role() {
    }

    public Role(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Role(String string) {
        //TODO Auto-generated constructor stub
    }

    public Role(long long1) {
        //TODO Auto-generated constructor stub
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Role [id=" + id + ", name=" + name + "]";
    }
}
