# Prueba Técnica

Este repositorio contiene la solución a la prueba técnica que se describe en este [documento](./Formulario%20primer%20semestre%201.pdf).

# Stack
El proyecto fue desarrollado utilizando Grails con Groovy para la creación de la API RESTful y Angular para el cliente. La base de datos es PostgreSQL.

* [Grails 6.1.2](https://docs.grails.org/6.1.2/guide/single.html)
* [Groovy 3.0.13](https://groovy-lang.org/changelogs/changelog-3.0.13.html)
* [Angular 15.2.0](https://angular.io/)
* [PostgreSQL 16.3](https://www.postgresql.org/about/news/postgresql-163-157-1412-1315-and-1219-released-2858/)
___

**NOTA:** A partir de ahora, se contempla que ya tiene instalado estas tecnologías y con la misma versión. Y puedes usar el IDE o editor de código de tu preferencia.

# Configuración
1. Lo primero es tener preparada la base de datos. El proyecto utiliza PostgreSQL. Así que debes crear un usuario y una base de datos para el proyecto. (Puede usar el [docker-compose](./api/docker-compose.yaml) para hacer esto) 
2.  Abre el archivo [application.yml](./api/grails-app/conf/application.yml) 
3. Con base en tus valores de autenticación de la base de datos y la configuración previa. Coloca estos valores en esta parte del archivo. 
   *A continuación está un ejemplo con el host en localhost y el puerto 5432.*
    ```yml
    dataSource:
        url: jdbc:postgresql://localhost:5432/nombreBaseDeDatos
        driverClassName: org.postgresql.Driver #No modificar
        username: tuusername
        password: 'tupassword'
    ```
4. Ahora, debes obtener un proveedor o servidor que realice envios de emails. Recomiendo el de servidor SMTP de Gmail.
5. Para el envio de emails debes colocar los valores adecuados acorde a tu proveedor de correos.
    ```yml
    mail:
        host: "smtp.gmail.com" # Tu host
        port: 465 # Puerto utilizado
        username: "tuusuario@gmail.com" 
        password: "tupassword"
    ```
6. Hasta este punto se ha configurado lo necesario para la API. Ahora para el cliente, solo basta con editar el archivo [environments.ts](./client/src/app/environments/environment.ts) y ahí colocar el host principal de la API. (Recomiendo edtiar despues de la ejecución y omitir si es en local y en el puerto por default)
   ```typescript
   export const environment = {
    baseURL: 'http://localhost:8080/',
    };
   ```

# Ejecución
Después de las configuraciones, se procede a ejecutar cada parte del proyecto. Esto se logra mediante:
1. Ejecución del api.
   ```bash
   cd api/
   ./gradlew bootRun
   ```
   Esta se ejecutará por default en el puerto 8080.
2. Ejecuecición del cliente
   ```bash
   cd client
   npm i
   npm run start
   ```
   Esta se ejecutará por default en el puerto 4200.
3. Listo, ahora se puede probar en local.


# Demo
Para una demostración de la solución puede ver el siguiente video [aquí](https://youtu.be/p2FPC-8yu_k).

----
Desarrollado por José Ángel García
