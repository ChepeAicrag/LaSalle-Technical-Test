package com.chepeaicrag

import grails.converters.JSON
import grails.rest.RestfulController

import grails.gorm.transactions.*

@Transactional
class StudentController extends RestfulController<Student> {

    StudentController(Class<Student> resource) {
        super(resource)
    }

    def index(Integer max) {
        def students = Student.list()
        def studentCount = Student.count()
//        respond students, model: [count: studentCount]
        respond model: [students: students]
    }

    @Transactional
    def save(){

        Student student = new Student(params)

        if(Student.findByMatricula(student.matricula)){
            render status: 400, contentType: 'text/plain', text: "El estudiante con matrícula ${student.matricula} ya está inscrito"
        }

        if(student.hasErrors()) {
            respond student.errors, view:'create'
        }
        else {
            print(student.toString())
            student.save();
        }
    }


    def show(Student student){
        if(student == null) {
            notFound()
        }
        else {
            return [student: student]
        }
    }

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
}