package zjx.admin.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import zjx.admin.project.dao.model.User;
import zjx.admin.project.services.UserService;
import zjx.admin.project.data.res.Response;

import zjx.admin.project.utils.ResultUtil;
import zjx.admin.project.enums.res.UserEnum;

import java.util.UUID;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpServletRequest;


/**
 * Created by zhaojinxin on 11.1.2017.
 */
@RestController
@RequestMapping("/v1")
public class UserController {
    @Autowired
    private UserService userService;

//    @RequestMapping(value = "/register", method = RequestMethod.POST)
//    public String registerUser(@RequestBody User newUser){ /*TODO add persistance and backend validation*/
//        System.out.println(newUser);
//        System.out.println(newUser.getFirstName());
//        System.out.println(newUser.getLastName());
//        System.out.println(newUser.getEmail());
//        System.out.println(newUser.getPassword());
//        System.out.println(newUser.getUserId());
//        return "success";
//    }

    /*http://stackoverflow.com/questions/11291933/requestbody-and-responsebody-annotations-in-spring*/

    @PostMapping("/user")
    public Object add(@RequestBody User user){
        if (userService.findByName(user.getName()) != null) {
            return ResultUtil.success(UserEnum.FAILED_EXIST.getCode(), UserEnum.FAILED_EXIST.getDesc(), null);
        }
        return ResultUtil.success(UserEnum.SUCCESS.getCode(), UserEnum.SUCCESS.getDesc(), userService.add(user));
    }

    @PostMapping("/login")
    public Response login(@RequestBody User user, HttpServletRequest request){
        if(userService.findLogin(user.getName(), user.getPassword()) == null){
            return ResultUtil.success(UserEnum.LOGIN_FAILEL.getCode(), UserEnum.LOGIN_FAILEL.getDesc(), null);
        }

        HttpSession session = request.getSession();
//        UUID uid = (UUID) session.getAttribute("uid");
//        if (uid == null) {
//            uid = UUID.randomUUID();
//        }
        session.setAttribute("uid", user.getName());
        session.setMaxInactiveInterval(30 * 60);
        return ResultUtil.success(UserEnum.LOGIN_SUCCESS.getCode(), UserEnum.LOGIN_SUCCESS.getDesc(), null);
    }

}
