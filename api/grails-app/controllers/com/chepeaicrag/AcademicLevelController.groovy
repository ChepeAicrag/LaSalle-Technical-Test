package com.chepeaicrag

import grails.converters.JSON


class AcademicLevelController {

    def academicLevels = [
            "Licenciatura":  ["Enfermeria", "Software", "Arquitectura"],
            "Maestría": ["Fiscal", "Educación"],
            "Doctorado": ["Comunicación", "Gastronomía"]
    ]


    def list() {
        render academicLevels  as JSON
    }
}