package zjx.admin.project.utils;

import zjx.admin.project.data.res.Response;

import java.util.List;

public class ResultUtil {

    /** 成功并且返回数据 */
    public static Response success(int code, String msg, Object object){
        Response result = new Response();
        result.setCode(code);
        result.setMsg(msg);
        result.setData(object);
        return result;
    }

    /** 失败 */
    public static Response error(Integer code, String msg){
        Response result = new Response();
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }
}
