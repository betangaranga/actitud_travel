<template>
    <div class="wrapper">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
            crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
        <nav class="tabs">
            <div class="selector"></div>
            <a href="#" @click="showNosotros"><i class="fas fa-handshake" style="color:#e4007c;"></i>
                <p id="headerDesk">Nosotros</p>
            </a>
            <a href="#" @click="showMision"><i class="fas fa-atlas"  style="color:#e4007c;"></i>
                <p id="headerDesk">Misión</p>
            </a>
            <a href="#" @click="showVision"><i class="far fa-eye"  style="color:#e4007c;"></i>
                <p id="headerDesk">Visión</p>
            </a>
            <a href="#" @click="showPorque"><i class="fab fa-superpowers"  style="color:#e4007c;"></i>
                <p id="headerDesk">¿Qué nos distingue?</p>
            </a>

            <div class="nosotros" v-show="nosotros">
                <div class="lista">
                    <h1 id="mobileHeader">Nosotros</h1>
                    <ul id="example-1">

                        <li v-for="item in items_nosotros">
                            <a href="#" class="active"><i class="fas fa-check" style="color:#e4007c;"></i></a>
                            {{ item.message }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mision" v-show="mision">
                <h1 id="mobileHeader">Misión</h1>

                <h3>Siempre garantizar
                    la mejor experiencia

                    brindando

                    seguridad y confianza
                    a nuestros clientes y
                    colaboradores.
                </h3>
                <img src="../assets/team.jpeg" alt="">
            </div>
            <div class="vision" v-show="vision">
                <h1 id="mobileHeader">Visión</h1>

                <h3>
                    Consolidarnos como
                    la mejor alternativa en
                    viajes y experiencias,
                    comprometiéndonos a
                    superar las expectativas
                    de nuestros clientes.
                </h3>
                <img src="../assets/vision.jpeg" alt="">

            </div>
            <div class="porque" v-show="porque">
                <div class="lista">
                    <h1 id="mobileHeader">¿Qué nos distingue?</h1>

                    <ul id="example-1">

                        <li v-for="item in items_porque">
                            <a href="#" class="active"><i class="fas fa-arrow-right" style="color:#e4007c;"></i></a>
                            {{ item.message }}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: {
                    color: "black",
                    textalign: "center"
                },
                mision: false,
                vision: false,
                nosotros: true,
                porque: false,
                items_nosotros: [{
                        message: 'Agencia de Viajes especializada en servicios aéreos y terrestres nacionales y extranjeros'
                    },
                    {
                        message: 'Profesionales con más de 10 años de experiencia en el sector turístico'
                    },
                    {
                        message: 'Ofrecemos un servicio con soluciones Integrales a tus necesidades'
                    }
                ],
                items_porque: [{
                        message: 'Tarifas competitivas y acceso a toda la oferta de servicios'
                    },
                    {
                        message: 'Emisión de confirmaciones de servicios de manera inmediata y a distancia'
                    },
                    {
                        message: 'Experiencia en el manejo de grupos y clientes VIP'
                    },
                    {
                        message: 'Seguimiento de servicios y apoyo en cualquier lugar del mundo'
                    }
                ]
            }
        },
        methods: {
            showMision: function () {
                this.mision = true;
                this.nosotros = false;
                this.vision = false;
                this.porque = false;
            },
            showNosotros() {
                this.mision = false;
                this.nosotros = true;
                this.vision = false;
                this.porque = false;
            },
            showVision() {
                this.mision = false;
                this.nosotros = false;
                this.vision = true;
                this.porque = false;
            },
            showPorque() {
                this.mision = false;
                this.nosotros = false;
                this.vision = false;
                this.porque = true;
            }
        }
    }
</script>
<style>
    #mobileHeader {
        display: none;
    }
#example-1{
    position: relative;
    top: -2em;
}
    #example-1 li {
        list-style: none;
        margin-top: 2em;
        font-weight: bold;
        text-align: left;


    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    h2 {
        margin: 0px;
        text-transform: uppercase;
    }

    h6 {
        margin: 0px;
        color: #777;
    }

    .wrapper {
        text-align: center;
        margin: 50px auto;
        position: relative;
        top: -3em;
    }

    .tabs {
        margin-top: 50px;
        font-size: 15px;
        padding: 0px;
        list-style: none;
        background: #fff;
        display: inline-block;
        border: 0px;
        position: relative;

    }

    .tabs a {
        text-decoration: none;
        color: black;
        text-transform: uppercase;
        padding: 10px 20px;
        display: inline-block;
        position: relative;
        z-index: 1;
        transition-duration: 0.6s;
    }

    .tabs a.active {
        color: black;
    }

    .tabs a i {
        margin-right: 5px;
    }

    .tabs .selector {
        height: 100%;
        display: inline-block;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 0;
        border-radius: 50px;
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        background: black;
        background: -moz-linear-gradient(45deg, #05abe0 0%, #8200f4 100%);
        background: -webkit-linear-gradient(45deg, #05abe0 0%, #8200f4 100%);
        background: linear-gradient(45deg, #05abe0 0%, #8200f4 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#05abe0', endColorstr='#8200f4', GradientType=1);
    }
@media only screen and (max-width: 1500px) {
       

        .tabs {

            z-index: 0;

        }

    }
    @media only screen and (max-width: 750px) {
        #mobileHeader {
            display: inherit;
        }

        .tabs {

            z-index: 0;

        }

        .tabs>div {
            margin: .8em
        }

        #headerDesk {
            display: none
        }
    }
</style>