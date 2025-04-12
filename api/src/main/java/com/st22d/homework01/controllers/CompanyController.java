package com.st22d.homework01.controllers;

import com.st22d.homework01.domain.Company;
import com.st22d.homework01.services.CompanyService;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @RequestMapping("/admin/company")
    public String getCompanyPage(Model model) {
        List<Company> companies = this.companyService.getAllCompanies();
        model.addAttribute("companies", companies);
        return "admin/company/index";
    }

    @RequestMapping("/admin/company/{id}")
    public String getCompanyDetailPage(Model model, @PathVariable int id) {
        Company company = this.companyService.getCompanyById(id);
        model.addAttribute("company", company);
        model.addAttribute("id", id);
        return "admin/company/company-detail";
    }

    @RequestMapping("/admin/company/create")
    public String getCompanyCreatePage(Model model) {
        model.addAttribute("newCompany", new Company());
        return "admin/company/create";
    }

    @RequestMapping(value = "/admin/company/create", method = RequestMethod.POST)
    public String createCompanyPage(Model model, @ModelAttribute("newCompany") Company company) {
        if (company == null || company.getCompanyName() == null || company.getCompanyName().isEmpty()) {
            var errorMessage = "Company name cannot be empty.";
            model.addAttribute("errorMessage", errorMessage);
            return "admin/company/create";
        }

        this.companyService.handleSaveCompany(company);
        return "redirect:/admin/company";
    }

    @RequestMapping("/admin/company/update/{id}")
    public String getCompanyUpdatePage(Model model, @PathVariable int id) {
        Company company = this.companyService.getCompanyById(id);
        model.addAttribute("newCompany", company);
        return "admin/company/update";
    }

    @PostMapping("/admin/company/update")
    public String postCompanyUpdate(Model model, @ModelAttribute("newCompany") Company company) {
        Company companyFind = this.companyService.getCompanyById(company.getId());
        if (companyFind != null) {
            companyFind.setCompanyName(company.getCompanyName());
            this.companyService.handleSaveCompany(companyFind);
        }
        model.addAttribute("newCompany", companyFind);
        return "redirect:/admin/company";
    }

    @GetMapping("/admin/company/delete/{id}")
    public String getCompanyDeletePage(Model model, @PathVariable int id) {
        model.addAttribute("id", id);
        model.addAttribute("newCompany", new Company());
        return "admin/company/delete";
    }

    @PostMapping("/admin/company/delete")
    public String postCompanyDelete(Model model, @ModelAttribute("newCompany") Company company) {
        this.companyService.handleDeleteCompany(company.getId());
        return "redirect:/admin/company";
    }
}
