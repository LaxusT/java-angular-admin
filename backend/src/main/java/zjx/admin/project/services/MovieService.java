package zjx.admin.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zjx.admin.project.dao.mapper.MovieListMapper;
import zjx.admin.project.dao.model.MovieList;
import zjx.admin.project.dao.model.MovieListExample;

import java.util.List;

@Service("movie")
public class MovieService {

    @Autowired MovieListMapper movieListMapper;

    public List<MovieList> getList(int start, int pageSize){
        MovieListExample movieListExample = new MovieListExample();
        movieListExample.page(start, pageSize);
        return movieListMapper.selectByExample(movieListExample);
    }
}
