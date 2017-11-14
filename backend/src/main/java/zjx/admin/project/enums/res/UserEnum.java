package zjx.admin.project.enums.res;

public enum UserEnum implements BaseReturnEnum {

    SUCCESS(200, "创建成功"),
    FAILED_EXIST(201, "用户已存在"),
    LOGIN_SUCCESS(200, "登录成功"),
    LOGIN_FAILEL(201, "用户名不存在或者密码错误"),
    FAILED(500,"failed"),
    ;

    private int code;
    private String desc;

    UserEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
