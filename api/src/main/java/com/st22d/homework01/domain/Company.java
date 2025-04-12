package com.st22d.homework01.domain;

import jakarta.persistence.*;

import java.util.List;

@Table(name = "COMPANY")
@Entity
public class Company {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column
    private String companyName;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "company_id")
    private List<UserDemo> users;

    public List<UserDemo> getUsers() {
        return users;
    }

    public void setUsers(List<UserDemo> users) {
        this.users = users;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
}