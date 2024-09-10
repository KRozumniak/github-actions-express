const appRouter = require('./app.js');

describe('app', () => {
  it('uses the router', () => {
    expect(appRouter).toBeDefined();
  });
});
