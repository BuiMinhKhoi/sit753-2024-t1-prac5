var expect = require('chai').expect;
var request = require('request');

describe('Get all cats API', function() {
    it('returns status 200', function(done) {
        request('http://localhost:3000/api/cats', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe('Insert a cat API', function() {
    it('returns status 200', function(done) {
        request.post('http://localhost:3000/api/cats', {form: {name: 'Tom', age: 3}}, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
