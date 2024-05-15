package com.chepeaicrag

class Student {

    String name
    String email
    String matricula
    Integer semester
    String level
    String password
    String career

    static constraints = {
        name blank:false, message: "El nombre es obligatorio"
        email email: true, blank: false, message: "El email es obligatorio"
        matricula blank:false, unique: true, maxSize: 9, minSize: 9, message: "La matrícula debe tener 9 caracteres"
        semester blank:false, max: 1, min: 1, message: "El semestre debe ser 1"
        level blank:false, inList: ['Bachillerato', 'Licenciatura', 'Maestría', 'Doctorado'], message: "El nivel es obligatorio"
        password blank: true, nullable: true
        career validator: { val, obj ->
            if(val == null)
                return 'La carrera es obligatoria'
            if (obj.level == 'Licenciatura' && !(val in ["Enfermeria", "Software", "Arquitectura"])) {
                return 'Opción.invalida'
            }
            if (obj.level == 'Maestria' && !(val in ["Fiscal", "Educación"])) {
                return 'Opción.invalida'
            }
            if (obj.level == 'Doctorado' && !(val in ["Comunicación", "Gastronomía"])) {
                return 'Opción.invalida'
            }
        }
    }
}