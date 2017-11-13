package zjx.admin.project.controller;

import org.hibernate.annotations.GeneratorType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import zjx.admin.project.dao.mapper.MovieListMapper;
import zjx.admin.project.dao.model.MovieList;
import zjx.admin.project.dao.model.MovieListExample;

import zjx.admin.project.utils.ResultUtil;

import java.util.List;
import java.util.ArrayList;

import zjx.admin.project.data.res.Response;

/**
 * Created by michal on 5.3.2017.
 */
@RestController
@RequestMapping("/v1")
public class MovieController {

    @Autowired
    private MovieListMapper movieListMapper;

    @GetMapping(value = "/movie/list")
    public Response registerUser(
            @RequestParam(value = "start", required = false, defaultValue = "0") String start,
            @RequestParam(value = "pageSize", required = false, defaultValue = "20") String pageSize){
        int startPage = Integer.parseInt(start) * Integer.parseInt(pageSize);
        MovieListExample movieListExample = new MovieListExample();
        movieListExample.page(startPage, Integer.parseInt(pageSize));
        List<MovieList> movieLists = movieListMapper.selectByExample(movieListExample);
//        return movieLists;
        return ResultUtil.success(movieListMapper.selectByExample(movieListExample));
    }


}
