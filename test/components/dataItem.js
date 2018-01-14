import expect from 'expect.js';

function add(a, b) {
  return a + b;
}

export const dummyTest = () => {
  describe('test suite', () => {
    it('should expose a function', () => {
      expect(add).to.be.a('function');
    });

    it('should do math', () => {
      expect(add(1, 3)).to.equal(4);
    });
  });
};