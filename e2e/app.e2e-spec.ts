import { AngularComponentFactoryPage } from './app.po';

describe('angular-component-factory App', () => {
  let page: AngularComponentFactoryPage;

  beforeEach(() => {
    page = new AngularComponentFactoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
