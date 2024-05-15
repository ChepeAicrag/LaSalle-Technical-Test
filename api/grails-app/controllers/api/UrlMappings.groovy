package api

class UrlMappings {
    static mappings = {
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        "/"(controller: 'application', action:'index')
        "500"(view:'/error')
        "404"(view:'/notFound')
        "/academicLevel"(controller: "academicLevel", action: "list", method: "GET")
    }
}
