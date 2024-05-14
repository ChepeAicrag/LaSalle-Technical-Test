package com.chepeaicrag

import grails.rest.Resource

@Resource(uri='/students')
class Student {

    String name
    String email
    String matricula
    int semester
    String level

    static constraints = {
        name blank:false
        email email: true, blank: false
        matricula blank:false, unique: true, maxSize: 10, minSize: 9
        semester blank:false, max: 1, min: 1
        level blank:false
    }
}