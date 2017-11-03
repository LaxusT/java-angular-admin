package sk.ikariera.project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by michal on 4.3.2017.
 *
 * TODO This allows crossorigin requests, it might not be needed in our app.
 * TODO Create a communication between frontend and backend and delete this.
 */
@Configuration
public class RestConfig {

    @Bean
    public CorsFilter corsFilter() {
        List<String> allowedOrigins = new ArrayList<>();
        allowedOrigins.add("*");
        List<String> allowedHeaders = new ArrayList<>();
        allowedHeaders.add("*");
        List<String> allowedMethods = new ArrayList<>();
        allowedMethods.add("GET");
        allowedMethods.add("PUT");
        allowedMethods.add("POST");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(allowedOrigins);
        config.setAllowedHeaders(allowedHeaders);
        config.setAllowedMethods(allowedMethods);
        source.registerCorsConfiguration("/**",config);
        return new CorsFilter(source);
    }
}
