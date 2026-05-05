const Cita = require('../models/Cita');

exports.crearCita = async (data) => {
    const cita = new Cita(data);
    return await cita.save();
};

exports.obtenerCitas = async () => {
    return await Cita.find();
};

exports.obtenerCitaPorId = async (id) => {
    return await Cita.findById(id);
};

exports.actualizarCita = async (id, data) => {
    return await Cita.findByIdAndUpdate(id, data, { new: true });
};

exports.eliminarCita = async (id) => {
    return await Cita.findByIdAndDelete(id);
};