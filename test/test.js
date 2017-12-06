var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("SAMPLE unit test",function () {

  // #1 should return home page

  it("should return home page",function (done) {

    // calling home page api
    server.get("/api/public/")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function (err,res) {
      res.error.should.equal(false);
      res.status.should.equal(200);
      done();
    });
  });

  it("should return all items",function (done) {

    // calling GET Items api
    server.get("/api/public/items")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function (err,res) {
      res.error.should.equal(false);
      res.status.should.equal(200);
      done();
    });
  });

  it("should return item",function (done) {

    // calling GET Item api
    server.get("/api/public/item/5a27df8673805a0e2809f924")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function (err,res) {
      res.error.should.equal(false);
      res.status.should.equal(200);
      done();
    });
  });

  it("should add new item",function (done) {

    //calling ADD api
    server.post('/api/public/item')
    .send({name : "testing"})
    .expect("Content-type",/text/)
    .expect(200)
    .end(function (err,res) {
      res.error.should.equal(false);
      res.status.should.equal(200);
      done();
    });
  });

  it("should change item",function (done) {

    //calling CHANGE api
    server.put('/api/public/item/5a27de427005340dc90ef90d')
    .send({name : "testing put"})
    .expect("Content-type",/text/)
    .expect(200)
    .end(function (err,res) {
      res.error.should.equal(false);
      res.status.should.equal(200);
      done();
    });
  });

  it("should delete item",function (done) {

    //calling DELETE api
    server.delete('/api/public/item/5a27f47705c14b11ef91313c')
    .expect("Content-type",/text/)
    .expect(200)
    .end(function (err,res) {
      res.error.should.equal(false);
      res.status.should.equal(200);
      done();
    });
  });
});
