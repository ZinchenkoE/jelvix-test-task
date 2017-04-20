import { JelvixTestTaskPage } from './app.po';

describe('jelvix-test-task App', () => {
  let page: JelvixTestTaskPage;

  beforeEach(() => {
    page = new JelvixTestTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
