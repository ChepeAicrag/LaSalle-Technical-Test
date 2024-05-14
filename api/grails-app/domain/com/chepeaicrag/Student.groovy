package com.chepeaicrag

class Student {

    String name
    String email
    String matricula
    int semester
    String level
    String password
    String career

    static constraints = {
        name blank:false
        email email: true, blank: false
        matricula blank:false, unique: true, maxSize: 10, minSize: 9
        semester blank:false, max: 1, min: 1
        level blank:false, inList: ['Licenciatura', 'Maestria', 'Doctorado']
        password blank: true, nullable: true
        career validator: { val, obj ->
            if (obj.level == 'Licenciatura' && !(val in ["Enfermeria", "Software", "Arquitectura"])) {
                return 'opcion.invalida'
            }
            if (obj.level == 'Maestria' && !(val in ["Fiscal", "Educación"])) {
                return 'opcion.invalida'
            }
            if (obj.level == 'Doctorado' && !(val in ["Comunicación", "Gastronomía"])) {
                return 'opcion.invalida'
            }
        }
    }
}