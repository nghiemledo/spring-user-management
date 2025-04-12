package com.st22d.homework01.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.st22d.homework01.domain.Role;
import com.st22d.homework01.services.RoleService;

@Controller
public class RoleController {
    private RoleService service;

    public RoleController(RoleService service) {
        this.service = service;
    }

    @GetMapping("/admin/role")
    public String getRolePage(Model model) {
        List<Role> roles = this.service.getAllRoles();
        model.addAttribute("roles", roles);
        return "/admin/role/index";
    }

    @GetMapping("/admin/role/new")
    public String getRoleCreatePage(Model model) {
        model.addAttribute("newRole", new Role());
        return "/admin/role/create";
    }

    @PostMapping("/admin/role/new")
    public String postRoleCreatePage(Model model, @ModelAttribute("newRole") Role role) {
        if (role == null || role.getName() == null || role.getName().isEmpty()) {
            var errorMessage = "User information is not null.";
            model.addAttribute("errorMessage", errorMessage);
        }
        this.service.handleSaveRole(role);
        return "redirect:/admin/role";
    }

    @RequestMapping("/admin/role/update/{id}")
    public String getRoleUpdatePage(Model model, @PathVariable long id) {
        Role role = this.service.getRoleById(id);
        model.addAttribute("newRole", role);
        return "admin/role/update";
    }

    @PostMapping("/admin/role/update")
    public String postRoleUpdate(Model model, @ModelAttribute("newRole") Role role) {
        Role roleFound = this.service.getRoleById(role.getId());
        if (roleFound != null) {
            roleFound.setName(role.getName());
            this.service.handleSaveRole(roleFound);
        }
        model.addAttribute("newRole", roleFound);
        return "redirect:/admin/role";
    }

    @GetMapping("/admin/role/delete/{id}")
    public String getRoleDeletePage(Model model, @PathVariable long id) {
        model.addAttribute("id", id);
        model.addAttribute("newRole", new Role());
        return "admin/role/delete";
    }

    @PostMapping("/admin/role/delete")
    public String postRoleDelete(Model model, @ModelAttribute("newRole") Role role) {
        this.service.handleDeleteRole(role.getId());
        return "redirect:/admin/role";
    }
}
