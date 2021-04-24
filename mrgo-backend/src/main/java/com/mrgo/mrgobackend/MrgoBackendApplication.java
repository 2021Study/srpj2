package com.mrgo.mrgobackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MrgoBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(MrgoBackendApplication.class, args);
    }

    @RequestMapping("/")
    public String home(){
        return "Hello Docker World";
    }

}
