import Formatter from '../formatter';

describe('formatter', () => {
  describe('injectUrlParam', () => {
    it('replace correctly string param sent', () => {
      const templateEx = 'https://github.com/{owner}';
      const owner = 'CarmineRumma';
      expect(Formatter.injectUrlParam(templateEx, owner)).toBe('https://github.com/CarmineRumma');
    });
  });
});
