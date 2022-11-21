import * as sinon from "sinon";
import chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");

import { User } from "../entities/User";

import app from "../app";
import { AppDataSource } from "../data-source";

chai.use(chaiHttp);

const { expect } = chai;

describe(" 1 - Testando get na rota /tasks", () => {
    const mockUser = {
        id: 1,
        username: "Kick",
        password: "Ab123456",
        account: {
            id: 1,
            balance: 100
        }
    } as User;

    const userRepo = AppDataSource.getRepository(User);

    before(async () => {
        sinon.stub(userRepo, "save").resolves(mockUser);
    });

    after(() => {
        (userRepo.save as sinon.SinonStub).restore();
    });

    it("1 - rota retorna as tarefas rota /tasks", async () => {
        const chaiHttpResponse = await chai.request(app).post("/user").send({
            username: mockUser.username,
            password: mockUser.password,
        });

        expect(chaiHttpResponse.status).to.be.equal(500);
        expect(chaiHttpResponse.body).to.be.eql(mockUser);
    });
});