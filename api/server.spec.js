const request = require('supertest');

const db = require('../data/dbConfig.js');
const server = require('./server.js');

describe('server', () => {
  beforeEach(async () => {
    // guarantees that the table is cleaned out before any of the tests run
    await db('hobbits').truncate();
  });

  // cross-env DB_ENV=testing
  it('tests are running with DB_ENV set as "testing"', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET /', () => {
    it('returns 200 OK', () => {
      // make a GET request to / on our server
      return request(server)
        .get('/')
        .then(res => {
          // check that the status code is 200
          expect(res.status).toBe(200);
        });
    });

    it('returns JSON', () => {
      return request(server)
        .get('/')
        .then(res => {
          // matching on regular expression
          expect(res.type).toMatch(/json/);
        });
    });
  });

  describe('GET /hobbits', () => {
    it('should return an array', () => {
      return request(server)
        .get('/hobbits')
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
  });

  describe('POST /hobbits', () => {
    it('should insert a hobbit into the db', () => {
      // insert one
      return request(server)
        .post('/hobbits')
        .send({
          name: 'gaffer',
        })
        .then(res => {
          // check there there is one hobbit in the table
          expect(res.body.length).toBe(1);
        });
    });

    it('should insert more than one hobbit', async () => {
      // add two hobbits
      await request(server)
        .post('/hobbits')
        .send([
          {
            name: 'sam',
          },
          {
            name: 'rose',
          },
          {
            name: 'frodo',
          },
        ]);

      // check that there are two records in the table
      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(3);
    });
  });
});
