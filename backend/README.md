# Nest.js Pokemon Battle Project

## Descripción

Este proyecto es el backend para la aplicación de batalla de pokemones. Proporciona una API para manejar los datos de los pokemones y las batallas. El backend está configurado para ejecutarse dentro de un contenedor Docker.

## Requisitos

- Docker
- Docker Compose

## Instrucciones para levantar el proyecto

1. **Clonar el repositorio**

   Asegúrate de estar en la rama `main`:

   ```bash
   git clone <URL_DEL_REPOSITORIO_BACKEND>
   cd <NOMBRE_DEL_REPOSITORIO_BACKEND>
   git checkout main

2. **Levantar el proyecto con Docker**
    Usa el siguiente comando para construir y levantar los contenedores:

     ```bash
     docker-compose -f docker-compose.yml up --build -d


    Este comando construirá la imagen de Docker y levantará los servicios definidos en el archivo docker-compose.yml en modo desatendido (detached).

3. ** Acceder a la API **

    Una vez que los contenedores estén en funcionamiento, podrás acceder a la API en http://localhost:3000 


----- 
# Agradecimientos

Quiero agradecer a NOVATECH por la oportunidad de participar en este challenge. Fue una experiencia muy enriquecedora y disfruté mucho trabajando en este proyecto.

¡Gracias por revisar mi trabajo!

# Contacto
Para cualquier consulta o sugerencia, no dudes en contactarme a tvallejossemino@gmail.com