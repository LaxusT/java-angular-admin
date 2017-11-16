package zjx.admin.project.test;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisShardInfo;

public class Test {
    public static void main(String[] args) {
        JedisShardInfo shardInfo = new JedisShardInfo("127.0.0.1", 6379);
        shardInfo.setPassword("zhaojinxin");

        //连接本地的 Redis 服务
        Jedis jedis = new Jedis(shardInfo);
//      jedis.select(1);
        System.out.println("Connection to server sucessfully");
        //查看服务是否运行
        System.out.println("Server is running: "+jedis.ping());
    }
}
