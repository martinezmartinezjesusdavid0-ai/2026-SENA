const request = require('supertest');
const app = require('../app');

let token;

describe('Pruebas de Citas', () => {

    // 🔐 Se ejecuta antes de todos los tests
    beforeAll(async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: "david@test.com",
                password: "123456"
            });

        token = res.body.token;
    });

    // 🧪 TEST 1
    it('Debe crear una cita', async () => {
        const res = await request(app)
            .post('/api/citas')
            .set('Authorization', `Bearer ${token}`)
            .send({
                paciente: "Juan",
                doctor: "Dr. Pérez",
                fecha: "2026-05-01",
                hora: "10:00"
            });

        expect(res.statusCode).toBe(201);
    });

    // 🧪 TEST 2 (EL QUE ME PASASTE)
    it('Debe obtener citas', async () => {
        const res = await request(app)
            .get('/api/citas')
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

});