<template>
  <div page_container-contacto>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
      crossorigin="anonymous">

    <head>
      <title>Contact V1</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!--===============================================================================================-->
    </head>

    <body>

      <div class="contact1">
        <div class="container-contact1">
          <div class="contact1-pic js-tilt" data-tilt>
            <div class="redes">
              <p id="redes"><b>¡Síguenos!</b> </p>
              <img id="face" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MDguNzg4IDQwOC43ODgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwOC43ODggNDA4Ljc4ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM0NzU5OTM7IiBkPSJNMzUzLjcwMSwwSDU1LjA4N0MyNC42NjUsMCwwLjAwMiwyNC42NjIsMC4wMDIsNTUuMDg1djI5OC42MTZjMCwzMC40MjMsMjQuNjYyLDU1LjA4NSw1NS4wODUsNTUuMDg1ICBoMTQ3LjI3NWwwLjI1MS0xNDYuMDc4aC0zNy45NTFjLTQuOTMyLDAtOC45MzUtMy45ODgtOC45NTQtOC45MmwtMC4xODItNDcuMDg3Yy0wLjAxOS00Ljk1OSwzLjk5Ni04Ljk4OSw4Ljk1NS04Ljk4OWgzNy44ODIgIHYtNDUuNDk4YzAtNTIuOCwzMi4yNDctODEuNTUsNzkuMzQ4LTgxLjU1aDM4LjY1YzQuOTQ1LDAsOC45NTUsNC4wMDksOC45NTUsOC45NTV2MzkuNzA0YzAsNC45NDQtNC4wMDcsOC45NTItOC45NSw4Ljk1NSAgbC0yMy43MTksMC4wMTFjLTI1LjYxNSwwLTMwLjU3NSwxMi4xNzItMzAuNTc1LDMwLjAzNXYzOS4zODloNTYuMjg1YzUuMzYzLDAsOS41MjQsNC42ODMsOC44OTIsMTAuMDA5bC01LjU4MSw0Ny4wODcgIGMtMC41MzQsNC41MDYtNC4zNTUsNy45MDEtOC44OTIsNy45MDFoLTUwLjQ1M2wtMC4yNTEsMTQ2LjA3OGg4Ny42MzFjMzAuNDIyLDAsNTUuMDg0LTI0LjY2Miw1NS4wODQtNTUuMDg0VjU1LjA4NSAgQzQwOC43ODYsMjQuNjYyLDM4NC4xMjQsMCwzNTMuNzAxLDB6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
              <img id="face" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1NTEuMDM0IDU1MS4wMzQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU1MS4wMzQgNTUxLjAzNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNzUuNTE3IiB5MT0iNC41NyIgeDI9IjI3NS41MTciIHkyPSI1NDkuNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1NTQpIj4KCQk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMDlCM0QiLz4KCQk8c3RvcCBvZmZzZXQ9IjAuMyIgc3R5bGU9InN0b3AtY29sb3I6I0M3NEM0RCIvPgoJCTxzdG9wIG9mZnNldD0iMC42IiBzdHlsZT0ic3RvcC1jb2xvcjojQzIxOTc1Ii8+CgkJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNzAyNEM0Ii8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8xXyk7IiBkPSJNMzg2Ljg3OCwwSDE2NC4xNTZDNzMuNjQsMCwwLDczLjY0LDAsMTY0LjE1NnYyMjIuNzIyICAgYzAsOTAuNTE2LDczLjY0LDE2NC4xNTYsMTY0LjE1NiwxNjQuMTU2aDIyMi43MjJjOTAuNTE2LDAsMTY0LjE1Ni03My42NCwxNjQuMTU2LTE2NC4xNTZWMTY0LjE1NiAgIEM1NTEuMDMzLDczLjY0LDQ3Ny4zOTMsMCwzODYuODc4LDB6IE00OTUuNiwzODYuODc4YzAsNjAuMDQ1LTQ4LjY3NywxMDguNzIyLTEwOC43MjIsMTA4LjcyMkgxNjQuMTU2ICAgYy02MC4wNDUsMC0xMDguNzIyLTQ4LjY3Ny0xMDguNzIyLTEwOC43MjJWMTY0LjE1NmMwLTYwLjA0Niw0OC42NzctMTA4LjcyMiwxMDguNzIyLTEwOC43MjJoMjIyLjcyMiAgIGM2MC4wNDUsMCwxMDguNzIyLDQ4LjY3NiwxMDguNzIyLDEwOC43MjJMNDk1LjYsMzg2Ljg3OEw0OTUuNiwzODYuODc4eiIvPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNzUuNTE3IiB5MT0iNC41NyIgeDI9IjI3NS41MTciIHkyPSI1NDkuNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1NTQpIj4KCQk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMDlCM0QiLz4KCQk8c3RvcCBvZmZzZXQ9IjAuMyIgc3R5bGU9InN0b3AtY29sb3I6I0M3NEM0RCIvPgoJCTxzdG9wIG9mZnNldD0iMC42IiBzdHlsZT0ic3RvcC1jb2xvcjojQzIxOTc1Ii8+CgkJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNzAyNEM0Ii8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8yXyk7IiBkPSJNMjc1LjUxNywxMzNDMTk2LjkzMywxMzMsMTMzLDE5Ni45MzMsMTMzLDI3NS41MTZzNjMuOTMzLDE0Mi41MTcsMTQyLjUxNywxNDIuNTE3ICAgUzQxOC4wMzQsMzU0LjEsNDE4LjAzNCwyNzUuNTE2UzM1NC4xMDEsMTMzLDI3NS41MTcsMTMzeiBNMjc1LjUxNywzNjIuNmMtNDguMDk1LDAtODcuMDgzLTM4Ljk4OC04Ny4wODMtODcuMDgzICAgczM4Ljk4OS04Ny4wODMsODcuMDgzLTg3LjA4M2M0OC4wOTUsMCw4Ny4wODMsMzguOTg4LDg3LjA4Myw4Ny4wODNDMzYyLjYsMzIzLjYxMSwzMjMuNjExLDM2Mi42LDI3NS41MTcsMzYyLjZ6Ii8+CgkKCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQxOC4zMSIgeTE9IjQuNTciIHgyPSI0MTguMzEiIHkyPSI1NDkuNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1NTQpIj4KCQk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMDlCM0QiLz4KCQk8c3RvcCBvZmZzZXQ9IjAuMyIgc3R5bGU9InN0b3AtY29sb3I6I0M3NEM0RCIvPgoJCTxzdG9wIG9mZnNldD0iMC42IiBzdHlsZT0ic3RvcC1jb2xvcjojQzIxOTc1Ii8+CgkJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNzAyNEM0Ii8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPGNpcmNsZSBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzNfKTsiIGN4PSI0MTguMzEiIGN5PSIxMzQuMDciIHI9IjM0LjE1Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
            </div>
            <div class="tel">
<img id="face" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MTguMTM1IDQxOC4xMzUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxOC4xMzUgNDE4LjEzNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzdBRDA2RDsiIGQ9Ik0xOTguOTI5LDAuMjQyQzg4LjUsNS41LDEuMzU2LDk3LjQ2NiwxLjY5MSwyMDguMDJjMC4xMDIsMzMuNjcyLDguMjMxLDY1LjQ1NCwyMi41NzEsOTMuNTM2ICAgTDIuMjQ1LDQwOC40MjljLTEuMTkxLDUuNzgxLDQuMDIzLDEwLjg0Myw5Ljc2Niw5LjQ4M2wxMDQuNzIzLTI0LjgxMWMyNi45MDUsMTMuNDAyLDU3LjEyNSwyMS4xNDMsODkuMTA4LDIxLjYzMSAgIGMxMTIuODY5LDEuNzI0LDIwNi45ODItODcuODk3LDIxMC41LTIwMC43MjRDNDIwLjExMyw5My4wNjUsMzIwLjI5NS01LjUzOCwxOTguOTI5LDAuMjQyeiBNMzIzLjg4NiwzMjIuMTk3ICAgYy0zMC42NjksMzAuNjY5LTcxLjQ0Niw0Ny41NTktMTE0LjgxOCw0Ny41NTljLTI1LjM5NiwwLTQ5LjcxLTUuNjk4LTcyLjI2OS0xNi45MzVsLTE0LjU4NC03LjI2NWwtNjQuMjA2LDE1LjIxMmwxMy41MTUtNjUuNjA3ICAgbC03LjE4NS0xNC4wN2MtMTEuNzExLTIyLjkzNS0xNy42NDktNDcuNzM2LTE3LjY0OS03My43MTNjMC00My4zNzMsMTYuODktODQuMTQ5LDQ3LjU1OS0xMTQuODE5ICAgYzMwLjM5NS0zMC4zOTUsNzEuODM3LTQ3LjU2LDExNC44MjItNDcuNTZDMjUyLjQ0Myw0NSwyOTMuMjE4LDYxLjg5LDMyMy44ODcsOTIuNTU4YzMwLjY2OSwzMC42NjksNDcuNTU5LDcxLjQ0NSw0Ny41NiwxMTQuODE3ICAgQzM3MS40NDYsMjUwLjM2MSwzNTQuMjgxLDI5MS44MDMsMzIzLjg4NiwzMjIuMTk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzdBRDA2RDsiIGQ9Ik0zMDkuNzEyLDI1Mi4zNTFsLTQwLjE2OS0xMS41MzRjLTUuMjgxLTEuNTE2LTEwLjk2OC0wLjAxOC0xNC44MTYsMy45MDNsLTkuODIzLDEwLjAwOCAgIGMtNC4xNDIsNC4yMi0xMC40MjcsNS41NzYtMTUuOTA5LDMuMzU4Yy0xOS4wMDItNy42OS01OC45NzQtNDMuMjMtNjkuMTgyLTYxLjAwN2MtMi45NDUtNS4xMjgtMi40NTgtMTEuNTM5LDEuMTU4LTE2LjIxOCAgIGw4LjU3Ni0xMS4wOTVjMy4zNi00LjM0Nyw0LjA2OS0xMC4xODUsMS44NDctMTUuMjFsLTE2LjktMzguMjIzYy00LjA0OC05LjE1NS0xNS43NDctMTEuODItMjMuMzktNS4zNTYgICBjLTExLjIxMSw5LjQ4Mi0yNC41MTMsMjMuODkxLTI2LjEzLDM5Ljg1NGMtMi44NTEsMjguMTQ0LDkuMjE5LDYzLjYyMiw1NC44NjIsMTA2LjIyMmM1Mi43Myw0OS4yMTUsOTQuOTU2LDU1LjcxNywxMjIuNDQ5LDQ5LjA1NyAgIGMxNS41OTQtMy43NzcsMjguMDU2LTE4LjkxOSwzNS45MjEtMzEuMzE3QzMyMy41NjgsMjY2LjM0LDMxOS4zMzQsMjU1LjExNCwzMDkuNzEyLDI1Mi4zNTF6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />          
  <p id="telefono">55 3900 6491</p>
            </div>
            <div class="domicilio">
              <iframe id="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.161592338181!2d-99.2202626846465!3d19.534674842469673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202393120bc09%3A0xb4cf264bdba1f8b8!2sActitud+Travel!5e0!3m2!1ses-419!2smx!4v1544636607749"
                width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
          </div>

          <form class="contact1-form validate-form">
            <span class="contact1-form-title">
              ¿En qué podemos ayudarte?
            </span>

            <div class="wrap-input1 validate-input" data-validate="Se requiere nombre">
              <input class="input1" type="text" name="name" placeholder="Nombre">
              <span class="shadow-input1"></span>
            </div>

            <div class="wrap-input1 validate-input" data-validate="Correo valido es requerido: ejemplo@abc.xyz">
              <input class="input1" type="text" name="email" placeholder="Email">
              <span class="shadow-input1"></span>
            </div>

            <div class="wrap-input1 validate-input" data-validate="Es necesario el Asunto">
              <input class="input1" type="text" name="subject" placeholder="Asunto">
              <span class="shadow-input1"></span>
            </div>

            <div class="wrap-input1 validate-input" data-validate="Se requiere un cuerpo en el mensaje">
              <textarea class="input1" name="message" placeholder="Mensaje"></textarea>
              <span class="shadow-input1"></span>
            </div>

            <div class="container-contact1-form-btn">
              <button class="contact1-form-btn">
                <span id="enviar">
                  Enviar
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

    </body>

  </div>

</template>

<script>

  export default {
    name: 'FieldIcons',
    data: () => ({
      correo: null,
      nombre: null,
      mensaje: null
    })
  }
</script>

<style lang="css" scoped>
  #enviar {
    color: white;
    position: relative;
    top: 0
  }

  #mapa {
    height: 20em;
    width: 50em
  }

  .domicilio {
    position: relative;
    top: 5em;
  }

  .redes {
    position: relative;
    right: -1em;
  }

  #telefono {
    width: 100%;
    border: 0;
    position: relative;
    right: -5.5em;
    top: -3em;
    font-weight: bold;
    font-size: -5em
  }

  #face {
    width: 5em;
    padding: .5em;
  }

  .tel {
    position: relative;
    right: 2em;
  }

  #tel {
    font-family: 'Quicksand', sans-serif;
    font-size: .6em;

  }

  th {
    padding: 1em;
  }

  tr {
    margin-left: .2em;
  }

  .fa-phone {
    position: relative;
    right: 3.5em;
  }

  .fa-whatsapp {
    position: relative;
    top: 1em;
    right: 4.5em;
  }

  #redes {
    font-size: 1.4em;

  }

  #telefono-icono1 {
    position: relative;
    right: 0em;
  }

  #telefono-icono2 {
    position: relative;
    right: -3em;
  }

  #whats-icono1 {
    position: relative;
    right: -2em;
    padding: 0;
    top: -1.5em;
  }

  #whats-icono2 {
    position: relative;
    right: -5em;
    padding: 0;
    top: -1.5em;
  }

  /*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/
  .contact1-pic {
    height: 40em;
    width: 100%;
    position: relative;
    top:-20em;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    font-family: 'Quicksand', sans-serif;
  }

  /*---------------------------------------------*/
  a {
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
  }

  a:focus {
    outline: none !important;
  }

  a:hover {
    text-decoration: none;
    color: #e4007c;
  }

  /*---------------------------------------------*/
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  p {
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
  }

  ul,
  li {
    margin: 0px;
    list-style-type: none;
  }


  /*---------------------------------------------*/
  input {
    outline: none;
    border: none;
  }

  textarea {
    outline: none;
    border: none;
  }

  textarea:focus,
  input:focus {
    border-color: transparent !important;
  }

  input::-webkit-input-placeholder {
    color: #999999;
  }

  input:-moz-placeholder {
    color: #999999;
  }

  input::-moz-placeholder {
    color: #999999;
  }

  input:-ms-input-placeholder {
    color: #999999;
  }

  textarea::-webkit-input-placeholder {
    color: #999999;
  }

  textarea:-moz-placeholder {
    color: #999999;
  }

  textarea::-moz-placeholder {
    color: #999999;
  }

  textarea:-ms-input-placeholder {
    color: #999999;
  }

  /*---------------------------------------------*/
  button {
    outline: none !important;
    border: none;
    background: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  iframe {
    border: none !important;
  }




  /*//////////////////////////////////////////////////////////////////
[ Contact 1 ]*/

  .contact1 {
    width: 100%;
    height: 50em;
    padding: 15px;

    background: #cf81ac;
    background: -webkit-linear-gradient(left, grey, grey);
    background: -o-linear-gradient(left, black, black);
    background: -moz-linear-gradient(left, black, black);
    background: linear-gradient(left, white, white);

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 15em
  }

  .container-contact1 {
    width: 1163px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 90px 130px 88px 148px;
    position: relative;
    top: -2em;
  }

  /*------------------------------------------------------------------
[  ]*/
  .contact1-pic {
    width: 400px;
    position: relative;
    top: -3.5em;
  }

  .contact1-pic img {
    max-width: 100%;
  }



  /*------------------------------------------------------------------
[  ]*/
  .contact1-form {
    width: 390px;
    height: 100%;
    position: relative;
    top: -5em
  }

  .contact1-form-title {
    display: block;
    font-size: 24px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
    padding-bottom: 44px;
    position: relative;
    top: 0;
    right: 0em;
    text-align: center;
    margin: auto;
  }

  input.input1 {
    height: 50px;
    border-radius: 25px;
    padding: 0 30px;
  }

  input.input1+.shadow-input1 {
    border-radius: 25px;
  }

  textarea.input1 {
    min-height: 150px;
    border-radius: 25px;
    padding: 12px 30px;
  }

  textarea.input1+.shadow-input1 {
    border-radius: 25px;
  }

  /*---------------------------------------------*/
  .wrap-input1 {
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 20px;
  }

  .input1 {
    display: block;
    width: 100%;
    background: #e6e6e6;
    font-size: 15px;
    line-height: 1.5;
    color: #666666;
  }

  .shadow-input1 {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0px 0px;
    color: #e4007c
  }

  .input1:focus+.shadow-input1 {
    -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
    animation: anim-shadow 0.5s ease-in-out forwards;
  }

  @-webkit-keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 80px 30px;
      opacity: 0;
    }
  }

  @keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 80px 30px;
      opacity: 0;
    }
  }

  /*---------------------------------------------*/
  .container-contact1-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .contact1-form-btn {
    min-width: 193px;
    height: 50px;
    border-radius: 25px;
    background: #e4007c;
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .contact1-form-btn i {
    margin-left: 7px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .contact1-form-btn:hover {
    background: #333333;
  }

  .contact1-form-btn:hover i {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }




  /*------------------------------------------------------------------
[ Responsive ]*/
  @media (max-width: 1500px) {
    .contact1{
      position: relative;
      top: 1em;
      height: 10%;
      width: 90%;
      margin: auto;
      z-index:0;
    }
    .domicilio{
      position: relative;
      top: 0;
      right: -2em;
    }
  }

  @media (max-width: 1300px) {
    .contact1-pic {
      width: 33.5%;
    }

    .contact1-form {
      width: 44%;
      position: relative;
      top: -4em;
      

    }
    .domicilio{
      position: relative;
      top: 0;
      right: -2em;
    }

    .contact1 {
      position: relative;
      top: 1em;
      height: 70em;
z-index: 0
    }
  }

  @media (max-width: 992px) {
    .container-contact1 {
      padding: 90px 80px 88px 90px;
    }

    .contact1-pic {
      width: 35%;
    }

    .contact1-form {
      width: 55%;
    }
  }

  @media (max-width: 768px) {
    .contact1 {
      position: relative;
      top: 10;
      height: 100%;
    right: 1em;
    }

    .container-contact1 {
      padding: 90px 80px 88px 80px;
    }

    .contact1-pic {
      display: inline;
      width: 100%;
      position: relative;
      top: 2em;
    }

    .contact1-form {
      width: 100%;
      height: 100%;
      position: relative;
      top: 2em;
      right: -1em;
    }

    .redes {
      position: relative;
      top: -2em;
      margin: auto;
    }

    #redes {
      width: 100%
    }

    form {
      position: relative;
      top: 2em
    }
  }

  @media (max-width: 576px) {
    .container-contact1 {
      padding: 90px 15px 88px 15px;
    }
  }


  /*------------------------------------------------------------------
[ Alert validate ]*/

  .validate-input {
    position: relative;
  }

  .alert-validate::before {
    content: attr(data-validate);
    position: absolute;
    max-width: 70%;
    background-color:
      white;
    border: 1px solid #c80000;
    border-radius: 13px;
    padding: 4px 25px 4px 10px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 8px;
    pointer-events: none;
    color: #c80000;
    font-size: 13px;
    line-height: 1.4;
    text-align: left;

    visibility: hidden;
    opacity: 0;

    -webkit-transition: opacity 0.4s;
    -o-transition: opacity 0.4s;
    -moz-transition: opacity 0.4s;
    transition: opacity 0.4s;
  }

  .alert-validate::after {
    content: "\f06a";
    display: block;
    position: absolute;
    color: #c80000;
    font-size: 15px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 13px;
  }

  .alert-validate:hover:before {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 992px) {
    .alert-validate::before {
      visibility: visible;
      opacity: 1;
    }
  }
</style>