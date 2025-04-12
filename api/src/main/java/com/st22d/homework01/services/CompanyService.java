package com.st22d.homework01.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.st22d.homework01.domain.Company;
import com.st22d.homework01.repositories.CompanyRepository;

@Service
public class CompanyService {
    private final CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public List<Company> getAllCompanies() {
        return this.companyRepository.findAll();
    }

    public Company getCompanyById(long id) {
        return this.companyRepository.findById(id);
    }

    public List<Company> getAllCompaniesByName(String name) {
        return this.companyRepository.findByCompanyName(name);
    }

    public Company handleSaveCompany(Company role) {
        Company newRole = this.companyRepository.save(role);
        return newRole;
    }

    public void handleDeleteCompany(long id) {
        this.companyRepository.deleteById(id);
    }
}
