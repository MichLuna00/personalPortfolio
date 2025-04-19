import parallax from './components/parallax.js';
import initScroll from './components/scroll.js';
import activeMenu from './components/selected_menu.js';
import updateCopyrightYear from './helpers/date_updater.js';
import changeLang from './helpers/language.js';
import initLoader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';


parallax();
initScroll();
activeMenu();
updateCopyrightYear();
changeLang();
initLoader();
resetToHome();
sendEmail();

