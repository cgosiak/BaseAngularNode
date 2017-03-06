import { NodeAngularBasePage } from './app.po';

describe('node-angular-base App', function() {
  let page: NodeAngularBasePage;

  beforeEach(() => {
    page = new NodeAngularBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
