const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('se o retorno da função sem nenuhm parametro retorna os horários da semana', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('testando se apasado os parametro corretamente o retorno é o esperado The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('testando se apasado os parametro corretamente o retorno é o esperado The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('testando se apasado os parametro corretamente o retorno é o esperado The zoo is closed com o horario diferente', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('testando erros', () => {
    const expected = new Error('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(expected);
  });
  it('testando erros', () => {
    const expected = new Error('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(expected);
  });
  it('testando erros', () => {
    const expected = new Error('The hour should represent a number');
    expect(() => getOpeningHours('Friday', 'C9:00-AM')).toThrow(expected);
  });
  it('testando erros', () => {
    const expected = new Error('The minutes should represent a number');
    expect(() => getOpeningHours('Friday', '09:c0-AM')).toThrow(expected);
  });
});
