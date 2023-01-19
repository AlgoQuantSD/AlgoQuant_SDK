// This is a file used for reference when we figure out more with API testing for an SDK

const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();

chai.use(chaiHttp);

const API_URL = "https://55vb89e0gb.execute-api.us-east-1.amazonaws.com/Test";

describe("GET /", () => {
  it("it should return response code 200", (done) => {
    chai
      .request(API_URL)
      .get("/test-auth")
      .end((err, res) => {
        res.should.have.status(200);
        // res.body.should.have.property("success").eql(true);
        // res.body.should.have.property("message").eql("API is live...");
        done(err);
      });
  });
});

describe("Test");
