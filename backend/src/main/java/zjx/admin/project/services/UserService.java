package zjx.admin.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import zjx.admin.project.dao.mapper.UserMapper;
import zjx.admin.project.dao.model.User;
import zjx.admin.project.dao.model.UserExample;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.io.UnsupportedEncodingException;
import java.util.List;



@Service
public class UserService {
    private UserMapper userMapper;

    @Autowired
    public UserService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public Object add(User user) {
        user.setPassword(passwordToHash(user.getPassword()));
        userMapper.insert(user);
        return findByName(user.getName());
    }

    public Object findById(int id) {
        UserExample userExample = new UserExample();
        userExample.createCriteria().andIdEqualTo(id);
        return userMapper.selectByExample(userExample).get(0);
    }

    public Object findByName(String name) {
        UserExample userExample = new UserExample();
        userExample.createCriteria().andNameEqualTo(name);
        List<User> users = userMapper.selectByExample(userExample);
        if(users.size() == 0){
            return null;
        }
        return users.get(0);
    }

    public List<User> findByPassword(String pwd){
        UserExample userExample = new UserExample();
        userExample.createCriteria().andPasswordEqualTo(passwordToHash(pwd)).andIdIsNotNull();
        List<User> users = userMapper.selectByExample(userExample);
        if(users.size() == 0){
            return null;
        }
        return users;
    }

    public Object findLogin(String name, String pwd){
        UserExample userExample = new UserExample();
        userExample.createCriteria().andNameEqualTo(name).andPasswordEqualTo(passwordToHash(pwd));
        List<User> users = userMapper.selectByExample(userExample);
        if(users.size() == 0){
            return null;
        }
        return users.get(0);
    }

    private static String passwordToHash(String password) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            digest.update(password.getBytes());
            byte[] src = digest.digest();
            StringBuilder stringBuilder = new StringBuilder();
            // 字节数组转16进制字符串
            // https://my.oschina.net/u/347386/blog/182717
            for (byte aSrc : src) {
                String s = Integer.toHexString(aSrc & 0xFF);
                if (s.length() < 2) {
                    stringBuilder.append('0');
                }
                stringBuilder.append(s);
            }
            return stringBuilder.toString();
        } catch (NoSuchAlgorithmException ignore) {
        }
        return null;
    }

}
