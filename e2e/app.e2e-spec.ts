import { AngularFirebaseTutorialPage } from './app.po';

describe('angular-firebase-tutorial App', () => {
  let page: AngularFirebaseTutorialPage;

  beforeEach(() => {
    page = new AngularFirebaseTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
