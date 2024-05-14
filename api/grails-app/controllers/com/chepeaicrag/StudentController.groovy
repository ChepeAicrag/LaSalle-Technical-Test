package com.chepeaicrag

import grails.rest.RestfulController
import org.springframework.http.HttpStatus
import grails.gorm.transactions.*

@Transactional
class StudentController extends  RestfulController<Student>{

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

        if(Student.findByMatricula(student.matricula) != null){
            badRequestStudent("El estudiante con matricula ${student.matricula} ya está inscrito")
            return
        }

        if(student.hasErrors()) {
            respond student.errors, view:'views/errors/_errors'
            return
        }

        student.save()
//        respond student, model: [student: student]
        render(view: 'save', model: [student: student])
    }


//    def show(){
//        Student student = Student.findById(params.id)
//        if(!student) {
//            notFound()
//            return
//        }
////        respond model: [student: student]
//        render(view: 'show', model: [student: student])
//    }

    @Transactional
    def update(Student student){
        if(student == null) {
            notFound()
        }
        else {
            if(student.hasErrors()) {
                respond student.errors, view:'edit'
            }
            else {
                print(student.toString())
            }
        }
    }

    def notFoundStudent(){
        response.status = HttpStatus.NOT_FOUND.value()
        render(view: 'notFound')
    }

    def badRequestStudent(String message){
        response.status = HttpStatus.BAD_REQUEST.value()
        render(view: 'badRequest', model: [message: message])
    }

}