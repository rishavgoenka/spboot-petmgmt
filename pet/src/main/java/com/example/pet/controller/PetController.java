package com.example.pet.controller;

import com.example.pet.entity.Pet;
import com.example.pet.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class PetController {

    @Autowired
    private PetService petService;

    @PostMapping("/newpet")
    public Pet createPet(@RequestBody Pet pet) {
        return petService.savePet(pet);
    }

    @GetMapping("/pets")
    public List<Pet> getAllPets() {
        return petService.getAllPets();
    }

    @PutMapping("/updatepet/{id}")
    public Pet updatePet(@PathVariable Long id, @RequestBody Pet pet) {
        return petService.updatePet(pet, id);
    }

    @DeleteMapping("/delpet/{id}")
    public void deletePet(@PathVariable Long id) {
        petService.deletePet(id);
    }
}