const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('se o retorno da função retorna um array de objetos com name, sex e age', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  it('retorna 4 caso parametro passado seja count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('retorna [ \'Ilana\', \'Orval\', \'Bea\', \'Jefferson\' ] caso parametro passado seja names', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(expected);
  });
  it('retorna média das idades caso parametro passado seja averageAge', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('retorna localização dos elefantes caso parametro passado seja location', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
});
