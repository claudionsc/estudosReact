import { rest } from 'msw'; //serve pra mocar requisições de api
import { setupServer } from 'msw/node';

import { getQuote } from './quotesService';

const response = { test: 'testing'};//o que espero que responda

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
); //servidor ficticio que vai responder no teste

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// test abaixo: espero que o servidor me responda
//um json e transforme num obj js


test('transform json response into object', async () => {
    const quote = await getQuote();

    expect(quote).toStrictEqual(response);
}); 

