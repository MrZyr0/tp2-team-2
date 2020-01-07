const { expect } = require('chai');
const request = require('request');

const functions = require('../src/functions');

const baseApi = `http://localhost:8080/api`;

describe('Tests', () => {
    describe('Functions', () => {
        it('Square function', () => {
            expect(functions.square(4)).to.equal(16);
        });
    });

    describe('API', () => {
        describe('Root', () => {
            it('Status code', () => {
                request(baseApi, (error, response) => {
                    expect(response.statusCode).to.equal(200);
                });
            });
            it('Body', () => {
                request(baseApi, (error, response, body) => {
                    expect(body).to.equal(JSON.stringify({ message: 'Hello World' }));
                });
            });
        });
    });
});
