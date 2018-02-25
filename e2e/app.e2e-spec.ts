import { AutoAuctionNgPage } from './app.po';

describe('auto-auction-ng App', function() {
  let page: AutoAuctionNgPage;

  beforeEach(() => {
    page = new AutoAuctionNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
