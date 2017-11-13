package zjx.admin.project.dao.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;
import zjx.admin.project.dao.model.MovieList;
import zjx.admin.project.dao.model.MovieListExample;

public interface MovieListMapper {
    int countByExample(MovieListExample example);

    int deleteByExample(MovieListExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(MovieList record);

    int insertSelective(MovieList record);

    List<MovieList> selectByExampleWithRowbounds(MovieListExample example, RowBounds rowBounds);

    List<MovieList> selectByExample(MovieListExample example);

    MovieList selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") MovieList record, @Param("example") MovieListExample example);

    int updateByExample(@Param("record") MovieList record, @Param("example") MovieListExample example);

    int updateByPrimaryKeySelective(MovieList record);

    int updateByPrimaryKey(MovieList record);

    Long sumByExample(MovieListExample example);

    void batchInsert(@Param("items") List<MovieList> items);
}