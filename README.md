# WBI-server
Server side for the Sneaker Head Project

## Configuraciones necesarias
***************************************
* Service-account.json:

  Mover el archivo **service-account.json**, enviado por correo, a la carpeta raíz del proyecto.

* Crear un archivo .env en la carpeta raíz del proyecto:

  .env:
  ```
  # express server config
  PORT=8080
  HOST=localhost
  HOST_URL=http://localhost:8080
  ```
******************************************
## Correr el proyecto:
******************************************
* Instalar las dependencias necesarias con `npm install`.
* Correr comando `npm start`.

El servidor ha de correr en los puertos definidos en el archivo *.env*.

