package zjx.admin.project;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@SpringBootApplication
@MapperScan("zjx.admin.project.dao.mapper")
public class Ng2bootApplication {
	public static void main(String[] args) {
		SpringApplication.run(Ng2bootApplication.class, args);
	}
}

