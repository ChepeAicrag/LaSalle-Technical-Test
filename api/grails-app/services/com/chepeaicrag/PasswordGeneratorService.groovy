package com.chepeaicrag

import groovy.transform.CompileStatic

import org.springframework.security.crypto.password.PasswordEncoder

import java.security.SecureRandom

@CompileStatic
class PasswordGeneratorService {

    PasswordEncoder passwordEncoder

    def generateRandomPassword(int length) {

        def characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#%^&*()_+0123456789"

        def limitCharacters = characters.length()

        def password = (1..length).collect { characters[new SecureRandom().nextInt(limitCharacters)] }.join('')

        def encodedPassword = passwordEncoder.encode(password)

        return [encodedPassword: encodedPassword, password: password]
    }
}