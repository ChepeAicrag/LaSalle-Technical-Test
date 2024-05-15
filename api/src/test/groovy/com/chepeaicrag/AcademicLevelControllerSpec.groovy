package com.chepeaicrag

import grails.testing.web.controllers.ControllerUnitTest
import spock.lang.Specification

class AcademicLevelControllerSpec extends Specification implements ControllerUnitTest<AcademicLevelController> {

     void "test index action"() {
        when:
        controller.index()

        then:
        status == 200

     }
}
