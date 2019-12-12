const id = require('../index').default;

it('returns passed argument', () => {
  expect(id(1)).toBe(1);
});
