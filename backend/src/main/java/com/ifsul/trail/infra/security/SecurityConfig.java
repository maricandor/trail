package com.ifsul.trail.infra.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Autowired
    SecurityFilter securityFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return  httpSecurity
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize

    //                    .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
    //                    .requestMatchers(HttpMethod.POST, "/auth/register").permitAll()
    //                    .requestMatchers(HttpMethod.GET, "/auth/findAll").permitAll()
                        /*
                        .requestMatchers(HttpMethod.DELETE, "/auth/delete/{i}").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/auth/update/{id}").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/auth/{cursoId}/{usuarioId}").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST, "/curso/add").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/curso/update/{cursoId}").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/curso/drop/{cursoId}").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/curso/{cursoId}/{disciplinaId}").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST, "/disciplina/add").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST, "/disciplina/vincularReq").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST, "/file/upload").hasRole("ADMIN")
                        */
                        .anyRequest().permitAll()
                )
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
