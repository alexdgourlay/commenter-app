import {condense} from './url';

describe('condense', () => {
  it('removes the protocol', () => {
    const condensed = condense('https://www.google.com');
    expect(condensed).not.toContain('https://');
  });

  it('formats correctly', () => {
    const condensed = condense('https://m.google.com');
    expect(condensed).toEqual('m.google.com');
  });

  it('formats correctly and removes the port number', () => {
    const condensed = condense('http://localhost:8080');
    expect(condensed).toEqual('localhost');
  });

  it('formats correctly when no protocol is supplied.', () => {
    const condensed = condense('m.google.com');
    expect(condensed).toEqual('m.google.com');
  });

  it('removes "www." subdomain', () => {
    const condensed = condense('www.google.com');
    expect(condensed).not.toContain('www.');
  });
});
