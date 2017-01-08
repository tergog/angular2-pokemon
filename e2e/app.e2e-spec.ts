import { Angular2PokemonPage } from './app.po';

describe('angular2-pokemon App', function() {
  let page: Angular2PokemonPage;

  beforeEach(() => {
    page = new Angular2PokemonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
