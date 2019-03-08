import { AngluerTestPage } from './app.po';

describe('angluer-test App', function() {
  let page: AngluerTestPage;

  beforeEach(() => {
    page = new AngluerTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
