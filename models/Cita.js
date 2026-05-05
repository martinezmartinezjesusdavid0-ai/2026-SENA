const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
    paciente: String,
    medico: String,
    fecha: Date,
    estado: String
});

module.exports = mongoose.model('Cita', citaSchema);