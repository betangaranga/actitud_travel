<template>
    <div>

        <md-card>
            <md-card-area>
                <md-card-media>
                    <img id="imgExp" v-bind:src="experiencias[i].img" alt="Sin">
                </md-card-media>

                <md-card-header>
                    <div class="md-title">{{experiencias[i].lugar}}</div>
                    <div class="md-subhead" v-bind:style="cuerpo">- {{experiencias[i].turista}}</div>
                </md-card-header>

                <md-card-content>
                    <p id="experiencia">{{experiencias[i].experiencia}}</p>
                </md-card-content>
            </md-card-area>
            <div class="botonesExp">
                <md-card-actions md-alignment="left" v-bind:style="botones">
                    <md-button @click="anterior">Anterior</md-button>
                    <md-button @click="siguiente">Siguiente</md-button>
                </md-card-actions>
            </div>
        </md-card>

    </div>
</template>
<script>
    import {
        functions
    } from 'firebase';
    import {
        db
    } from '../main'
    export default {

        data() {

            return {
                experiencias: [],
                cuerpo: {
                    height: "2em"
                },
                i: 0,
                botones: {
                    position: "relative",
                    top: "9em",

                }
            }
        },

        firestore() {
            return {
                experiencias: db.collection("actitud_travel").doc("sistema").collection("experiencias")
            }
        },
        methods: {

            anterior() {
                if (this.i - 1 < this.experiencias.length && this.i > 0) {
                    this.i--;
                }
            },
            siguiente() {
                if (this.i + 1 < this.experiencias.length) {
                    this.i++;


                }

            }
        }
    }
</script>
<style lang="scss" scoped>
    p {
        font-weight: bold;
        text-justify: auto
    }

    #imgExp {
        width: 35em;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        text-justify: auto;
        height: 20em
    }

    .md-card {
        width: 35em;
        height: 50em;
        margin: 15px;
        display: inline-block;
        vertical-align: top;
        border-radius: 2em
    }

    .md-card-example {
        .md-subhead {
            .md-icon {
                $size: 16px;

                width: $size;
                min-width: $size;
                max-width: $size;
                height: $size;
                font-size: $size !important;
            }

            span {
                vertical-align: middle;

            }
        }

        .card-reservation {
            margin-top: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .md-icon {
                margin: 8px;
            }
        }

        .md-button-group {
            display: flex;

            .md-button {
                min-width: 60px;
                border-radius: 2px;
            }
        }
    }

    @media all and (max-width:750px) {
        .md-card {
            width: 80%;
            height: 30em;

        }

        #experiencia {
            position: relative;
            top: -2.5em
        }

        #imgExp {
            height: 150px;
        }

        .botonesExp {
            position: relative;
            top: -14em
        }

    }
</style>