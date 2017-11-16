package zjx.admin.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import zjx.admin.project.utils.ResultUtil;
import zjx.admin.project.data.res.Response;
import zjx.admin.project.services.MovieService;

/**
 * Created by zhaojinxin on 11.1.2017.
 */
@RestController
@RequestMapping("/v1")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping(value = "/movie/list")
    public Object registerUser(
            @RequestParam(value = "start", required = false, defaultValue = "0") String start,
            @RequestParam(value = "pageSize", required = false, defaultValue = "20") String pageSize){
        int startPage = ((Integer.parseInt(start) <= 0 ) ? 0 : Integer.parseInt(start) - 1) * Integer.parseInt(pageSize);
        return ResultUtil.success(200, "成功",movieService.getList(startPage, Integer.parseInt(pageSize)));
    }


}
