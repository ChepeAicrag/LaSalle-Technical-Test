import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.grails.gsp.GroovyPagesTemplateEngine
import org.grails.web.pages.DefaultGroovyPagesUriService

beans = {
    passwordEncoder(BCryptPasswordEncoder)
    groovyPagesTemplateEngine(GroovyPagesTemplateEngine)
    groovyPagesUriService(DefaultGroovyPagesUriService)
}