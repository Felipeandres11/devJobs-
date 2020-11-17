const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//GENERA LAS URL
const slug = require('slug');

//GENERA ID
const shortid = require('shortid');


const vacantesSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: 'El nombre de la vacante es obligatorio',
        trim: true
    },

    empresa: {
        type: String,
        trim: true
    },
    ubicación: {
        type: String,
        trim: true,
        required: 'La ubicación es obligatoria'
    },
    salario: {
        type: String,
        defaul: 0
    },
    contrato: {
        type: String
    },
    descripcion: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        lowercase: true
    },
    skills: [String],
    candidatos: [{
        nombre: String,
        email: String,
        cv: String
    }]


});
//MIDDLEWARE - ANTES DE GUARDAR
vacantesSchema.pre('save', function(next){
    
    const url = slug(this.titulo);
    this.url = `${url}-${shortid.generate()}`;
})

module.exports = mongoose.model('Vacante', vacantesSchema );