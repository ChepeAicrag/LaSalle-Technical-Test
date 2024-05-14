package com.chepeaicrag

import grails.testing.web.controllers.ControllerUnitTest
import spock.lang.Specification

class StudentControllerSpec extends Specification implements ControllerUnitTest<StudentController> {

     void "test index action"() {
        when:
        controller.index()

        then:
        status == 200

     }
}
