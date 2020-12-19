var app = require('../index.js'),
request = require('supertest');

function learningPath() {
  describe('POST main/', function() {
    it('send info and get LP customized', function(done) {
      request(app)
      .post('/main/')
      .send({'user': 'joelEduardo93555', field: 'DS', subfield:'ML/IA'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200 || 404)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
    });
  });
}

learningPath()