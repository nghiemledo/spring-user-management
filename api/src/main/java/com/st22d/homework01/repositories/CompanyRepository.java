package com.st22d.homework01.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.st22d.homework01.domain.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {

    List<Company> findByCompanyName(String companyName);

    Company findById(long id);
}
