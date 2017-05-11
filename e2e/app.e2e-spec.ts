import { TryAngularMaterialPage } from './app.po';

describe('try-angular-material App', () => {
  let page: TryAngularMaterialPage;

  beforeEach(() => {
    page = new TryAngularMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
