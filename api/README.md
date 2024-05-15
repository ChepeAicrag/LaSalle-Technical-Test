# API

La api cuenta con 3 sencillos endpoints para lograr su funcionamiento. 

**NOTA**: Considerando el host http://localhost:8080/

1. Obtener los estudiantes registrados
   ```curl
   curl --location 'http://localhost:8080/student'
   ```
   Ejemplo de response
   
2. Registrar estudiante
   ```curl
   curl --location 'http://localhost:8080/student' \
   --header 'Content-Type: application/json' \
   --data-raw '{
    "email": "chepeaicrag12@gmail.com",
    "name": "Angel Garcia",
    "matricula": "123456705",
    "semester": 1,
    "level": "Doctorado",
    "career": "Comunicación"
   }'
   ```

3. Obtener los niveles academicos disponibles
   ```curl
   curl --location 'http://localhost:8080/academicLevel'
   ```