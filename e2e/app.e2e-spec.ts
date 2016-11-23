import { ZaiProjektPage } from './app.po';

describe('zai-projekt App', function() {
  let page: ZaiProjektPage;

  beforeEach(() => {
    page = new ZaiProjektPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
