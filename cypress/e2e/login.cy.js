import { Login } from '../pages/Login';
import { HomePage} from '../pages/HomePage';

const loginPage = new Login();
const homePage = new HomePage();

describe('Testing the login page', () => {
    it('Test 1: should login and logout with user888@gmail.com' ,() => {
        loginPage.visit();
        loginPage.login('user888@gmail.com', '1234567890');
        homePage.logout();
    });
});

describe('Testing the login page', () => {
    it('Test 2: should login and logout with testowyqa@qa.team' ,() => {
        loginPage.visit();
        loginPage.login('testowyqa@qa.team', 'QA!automation-1');
        homePage.logout();
    });
});