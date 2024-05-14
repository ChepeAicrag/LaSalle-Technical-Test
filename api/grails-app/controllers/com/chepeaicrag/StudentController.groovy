package com.chepeaicrag

import grails.rest.RestfulController
import org.springframework.http.HttpStatus
import grails.gorm.transactions.*

@Transactional
class StudentController extends  RestfulController<Student>{

    static SEMESTERS_ALLOWS = [1]

    StudentController() {
        super(Student)
    }

    def index(Integer max) {
        def students = Student.list()
        def studentCount = Student.count()
        respond students, model:[count: studentCount, students: students]
    }

    @Transactional
    def save(Student  student){

        if(!SEMESTERS_ALLOWS.contains(student.semester)){
            badRequestStudent("Solo se aceptan estudiantes de semestres ${SEMESTERS_ALLOWS}")
            return
        }

        if(Student.findByMatricula(student.matricula) != null){
            badRequestStudent("El estudiante con matricula ${student.matricula} ya está inscrito")
            return
        }


        if(student.hasErrors()) {
            respond student.errors, view:'views/errors/_errors'
            return
        }

        Student saved = student.save()
        respond saved, model:[student: saved]
    }

    def badRequestStudent(String message){
        response.status = HttpStatus.BAD_REQUEST.value()
        render(view: 'badRequest', model: [message: message])
    }

}