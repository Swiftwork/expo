import Linking from '../Linking/Linking';

describe('parse', () => {
  test.each<string>([
    'exp://127.0.0.1:19000/',
    'exp://127.0.0.1:19000/--/test/path?query=param',
    'exp://127.0.0.1:19000?query=param',
    'exp://exp.host/@test/test/--/test/path?query=param',
    'exp://exp.host/@test/test/--/test/path',
    'https://example.com/test/path?query=param',
    'https://example.com/test/path',
    'https://example.com:8000/test/path',
    'https://example.com:8000/test/path+with+plus',
    'custom:///test/path?foo=bar',
    'custom:///',
    'custom://',
    'custom://?hello=bar',
    'invalid',
  ])(`parses %p`, url => {
    expect(Linking.parse(url)).toMatchSnapshot();
  });
});
