import { test, expect } from '@playwright/test';
const token = require('./token');
const host = 'https://reqres.in/';
var userid;

// test('Get users info with token', async({request}) => {

//     // URL для GET-запиту
//     const url = 'https://artemis-dev-api.azurewebsites.net/api/Cabinets';

//     // Додавання заголовка з токеном до запиту
//     const headers = {
//         'Authorization': `Bearer ${token}`
//     };

//     const response = await request.get(url, { headers });
//     console.log(await response.json());
//     expect(response.status()).toBe(200);
// });

test('Get users info', async({request}) => {
    const response = await request.get(host + 'api/users?page=2')
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test('Create user', async({request}) => {
    const response = await request.post(host + 'api/users',
                        {
                        data:{"name": "Maksmy", "job": "QA"},
                        headers:{"Acceptance": "application/json"}
                        });
    console.log(await response.json());
    expect(response.status()).toBe(201);

    var res =await response.json();
    userid = res.id;
})

test('Update user', async({request}) => {
    const response = await request.put(host + 'api/users/' + userid,
                        {
                        data:{"name": "Maksymy", "job": "QA"},
                        headers:{"Acceptance": "application/json"}
                        });
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test('Delete user', async({request}) => {
    const response = await request.delete(host + 'api/users/' + userid);
    expect(response.status()).toBe(204);
})