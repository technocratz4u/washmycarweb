import { WashmycarwebPage } from './app.po';

describe('washmycarweb App', () => {
  let page: WashmycarwebPage;

  beforeEach(() => {
    page = new WashmycarwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
