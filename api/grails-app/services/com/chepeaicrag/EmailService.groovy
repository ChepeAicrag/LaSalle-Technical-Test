package com.chepeaicrag

import grails.plugins.mail.MailService
import groovy.transform.CompileStatic

@CompileStatic
class EmailService {

    MailService mailService

    def sendEmail(to, subject, body) {
//        mailService.sendMail{
//            to "${to}"
//            subject "${subject}"
//            body "${body}"
//        }
    }
}