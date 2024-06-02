  describe('httpbin API Tests', () => {

  // 1 test
    it('GET request', () => {
        cy.request('GET', 'https://httpbin.org/get').then(response => {
          const status = response.status;
          assert.equal(200, status);
        });
    });

  // 2 test
  it('Headers', () => {
    cy.request({
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            'User-Agent': 'my-app/0.0.1',
            'Custom-Header': 'CustomValue'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.headers['User-Agent']).to.eq('my-app/0.0.1');
        expect(response.body.headers['Custom-Header']).to.eq('CustomValue');
    });
});
  
  // 3 test
  it('POST JSON', () => {
    const jsonData = { key: 'value' };
    cy.request('POST', 'https://httpbin.org/post', jsonData)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.json.key).to.eq('value');
        });
});

  // 4 test  
  it('Query Parameters', () => {
    cy.request({
        method: 'GET',
        url: 'https://httpbin.org/get',
        qs: {
            param1: 'value1',
            param2: 'value2'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.args.param1).to.eq('value1');
        expect(response.body.args.param2).to.eq('value2');
    });
});

  // 5 test
  it('PUT request', () => {
    cy.request('PUT', 'https://httpbin.org/put', { key: 'value' })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.form.key).to.eq('value');
        });
  });

  // 6 test
  it('DELETE request', () => {
    cy.request('DELETE', 'https://httpbin.org/delete')
        .its('status')
        .should('equal', 200);
});
 
  // 7 test
    it('Random Query Parameter', () => {
        const randomValue = Math.random().toString(36).substring(7);
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/get',
            qs: {
                random: randomValue
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.args.random).to.eq(randomValue);
        });
    });

  // 8 test 
    it('Response Content', () => {
        cy.request('GET', 'https://httpbin.org/ip')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('origin');
            });
    });

  // 9 test
    it('Request Duration', () => {
        const startTime = new Date().getTime();
        cy.request('GET', 'https://httpbin.org/delay/1')
            .then((response) => {
                const endTime = new Date().getTime();
                const duration = endTime - startTime;
                expect(response.status).to.eq(200);
                expect(duration).to.be.gte(1000);
            });
    });

  // 10 test
  it('POST request', () => {
    cy.request('POST', 'https://httpbin.org/post', { key: 'value' })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.form.key).to.eq('value');
        });
});
});
