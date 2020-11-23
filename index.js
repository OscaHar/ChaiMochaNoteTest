const chai = require("chai");
    chai.use(require('chai-json'));
const chaiHttp = require("chai-http");

const expect = chai.expect;
const BaseURL = "localhost:3000";

var notesdata = {
        
    "title": "AAAA",
    "content": "sdfsdff",
    "id": 1
    
}; 

let title = "changed birches"
let content = "just like your mawn"

chai.use(chaiHttp);

describe("Get a note by id test", function(){
    it("getting a note", function(done){
        chai.request(BaseURL)
            .get("/notes/" + notesdata.id)
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res.body).to.have.property("id");
                expect(res.body).to.have.property("content");
                expect(res.body).to.have.property("title");
                expect(res.body.title).to.equal(notesdata.title);

                done();
            })
    });
});

describe("Getting all notes", function(){
    it("get all notes", function(done){
        chai.request(BaseURL)
            .get("/notes")
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');

                done();
            })
    });
});

describe("add a note", function(){
    it("adding a note", function(done){
        chai.request(BaseURL)
            .post("/notes")
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({data: JSON.stringify(notesdata)})
            .end(function(err, res){
                expect(res).to.have.status(200);

                done();
            })
    });
});

//works
/*describe("Update a note", function(){
    it("updating a note", function(done){
        chai.request(BaseURL)
            .put("/notes/" + notesdata.id)
            .set('content-type', 'application/x-www-form-urlencoded')
           // .send({title: title, content: content})
            .end(function(err, res){
                expect(res).to.have.status(200);

                done();
            })
    });
});*/
