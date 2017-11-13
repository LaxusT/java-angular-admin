package zjx.admin.project.data.res;

import lombok.Data;

@Data
public class Response<T> {
    /** 错误码. */
    private Integer code;

    /** 提示信息. */
    private String msg;

    /** 内容. */
    private T data;
}
