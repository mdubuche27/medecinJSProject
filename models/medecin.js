const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MedecinSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unqique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
    },
    lat: {
        type: Number,
    },
    long: {
        type: Number,
    },
    listPatient:{
        type: Array,
    },
    speciality: {
        type: String,
    },
})
module.exports = mongoose.model('Medecin', MedecinSchema);