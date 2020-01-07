const { expect } = require('chai');
const request = require('request');

const functions = require('../src/functions');

const { TEST_URI } = process.env;

describe('Tests', () => {
    describe('Functions', () => {
        it('Square function', () => {
            expect(functions.square(4)).to.equal(16);
        });
    });

    describe('API', () => {
        describe('Root', () => {
            it('Status code', () => {
                request(TEST_URI, (error, response) => {
                    expect(response.statusCode).to.equal(200);
                });
            });
            it('Body', () => {
                request(TEST_URI, (error, response, body) => {
                    expect(body).to.equal(JSON.stringify({ message: 'Hello World' }));
                });
            });
        });
    });
});
