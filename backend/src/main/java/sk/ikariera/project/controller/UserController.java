package sk.ikariera.project.controller;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import sk.ikariera.project.model.User;

/**
 * Created by michal on 5.3.2017.
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String registerUser(@RequestBody User newUser){ /*TODO add persistance and backend validation*/
        System.out.println(newUser);
        System.out.println(newUser.getFirstName());
        System.out.println(newUser.getLastName());
        System.out.println(newUser.getEmail());
        System.out.println(newUser.getPassword());
        System.out.println(newUser.getUserId());
        return "success";
    }

    /*http://stackoverflow.com/questions/11291933/requestbody-and-responsebody-annotations-in-spring*/
}
