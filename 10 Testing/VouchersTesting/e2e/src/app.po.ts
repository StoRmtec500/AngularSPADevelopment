import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get('/demos/introe2e');
	}

	getParagraphText() {
		return element(by.css('mat-sidenav > div > mat-toolbar > h4')).getText();
	}
}
