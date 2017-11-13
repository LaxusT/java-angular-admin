package zjx.admin.project.utils;

import zjx.admin.project.data.res.Response;

import java.util.List;

public class ResultUtil {
    /** 成功并且返回数据 */
    public static Response success(Object object){
        Response result = new Response();
        result.setCode(200);
        result.setMsg("成功");
        result.setData(object);
        return result;
    }

    /** 成功并且不需要返回数据 */
    public static Response success(){
        return success(null);
    }

    /** 失败 */
    public static Response error(Integer code, String msg){
        Response result = new Response();
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }
}
