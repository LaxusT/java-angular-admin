package zjx.admin.project;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("zjx.admin.project.dao.mapper")
public class Ng2bootApplication {

	public static void main(String[] args) {
		SpringApplication.run(Ng2bootApplication.class, args);
	}
}
