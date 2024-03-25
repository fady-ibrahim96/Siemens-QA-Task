const request = require('supertest');
const { expect } = require('chai');
let app="http://localhost:3000"
let token
describe('API Routes', () => {
    it('validate creating new user', async () => {
        const response = await request(app)
        .post('/api/v1/users')
        .send(({name:'fady',email:'fady.ibrahimmansour@gmail.com',password:'user123'}))
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('token');
        expect(response.body).to.have.property('message');

    })
    it('validate authenticating newly created user', async () => {
        const response = await request(app)
        .post('/api/v1/auth')
        .send(({email:'fady.ibrahimmansour@gmail.com',password:'user123'}))
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('token');
        token=response.body.token

    })
    it('validate on error code when authenticating newly created user with no body sent', async () => {
        const response = await request(app)
        .post('/api/v1/auth')
        expect(response.status).to.equal(401);

    })
    it('validate getting user with a specific token', async () => {
        const response = await request(app)
        .get('/api/v1/users')
        .set('Authorization', token);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('name');
        expect(response.body.name).to.equal('fady');
        expect(response.body).to.have.property('email');
        expect(response.body.email).to.equal('fady.ibrahimmansour@gmail.com');
        expect(response.body).to.have.property('password');
        expect(response.body.password).to.equal('user123');
        expect(response.body).to.have.property('imageUrl');

    })
    it('validate updating user with a specific token', async () => {
        const response = await request(app)
        .patch('/api/v1/users')
        .set('Authorization', token)
        .send(({name:'ibrahim',email:'fady.ibrahim@gmail.com',password:'user12345'}));
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.equal('User updated with success');

    })
    it('validate delete user with a specific token', async () => {
        const response = await request(app)
        .delete('/api/v1/users')
        .send('Authorization', token)
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.equal('User deleted with success');

    })
    it('validate deleting all user with key admin token', async () => {
        const response = await request(app)
        .delete('/api/v1/all-users')
        .send(({key_admin: "keyadmin123"}))
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.equal('Users deleted with success');

    })
    it('validate deleting all user with invalid key admin token', async () => {
        const response = await request(app)
        .delete('/api/v1/all-users')
        .send(({key_admin: "keyadmin456"}))
        expect(response.status).to.equal(403);

  
    })
})