const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const { expect } = chai;
chai.should();

chai.use(chaiHttp);

describe('Posts API', () => {
    describe('get /v1/service-providers', () => {
        beforeEach(async () => {
        });
        afterEach(async () => {
        });
        it('It should get an error if there is no longitude in query', async () => {
            const query = {
                latitude: '111.22',
            };
            const response = await chai.request(server)
                .get('/v1/service-providers/')
                .send()
                .query(query);

            const { body } = response;
            expect(response.statusCode).to.equal(400);
            expect(body).deep.equal({
                errors: [{ message: 'invalid params' }],
            });
            // expect(data).to.have.property('title').that.is.a('string').and.to.equal(`${newPost.title}`);
        });

        it('It should get a list of service-providers locations', async () => {
            const query = {
                latitude: '111.22',
                longitude: '113.22',
                limit: 2,
            };
            const response = await chai.request(server)
                .get('/v1/service-providers/')
                .send()
                .query(query);

            const { body } = response;

            expect(response.statusCode).to.equal(200);
            expect(body.data.length).to.equal(query.limit);
            expect(body).to.deep.equal({
                data: [
                    {
                        distance: 6663501.455361153,
                        location: {
                            id: 'c5351b06-e7aa-4fa2-b3f5-30ef432812b0',
                            latitude: '40.1865',
                            longitude: '44.5133',
                            name: 'New Era Construction',
                        },
                    },
                    {
                        distance: 6663519.985031413,
                        location: {
                            id: '01b8f6c0-6a6b-4dae-8e07-0ed297adaf9c',
                            latitude: '40.188',
                            longitude: '44.5185',
                            name: 'Pro Builders Inc.',
                        },
                    },
                ],
            });
        });
    });
});
