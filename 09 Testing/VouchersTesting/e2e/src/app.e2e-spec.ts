import { AppPage } from './app.po';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it("should display 'Testing' in left menu header", () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Testing');
	});
});
