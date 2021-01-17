import Vue from 'vue';
import drawChart from './chart';
import VueFinalModal from 'vue-final-modal';
import VueI18n from 'vue-i18n'
import {ENGLISH_TRANSLATIONS} from './localization/en';
import {FRENCH_TRANSLATIONS} from './localization/fr';
import RepresentativesModal from "./components/RepresentativesModal";
import PetitionModal from "./components/PetitionModal";
import SidebarButtons from "./components/SidebarButtons";
import SocialModal from "./components/SocialModal";
import DonationModal from "./components/DonationModal";
import Quicklinks from "./Quicklinks";
import ModalLink from "./components/ModalLink";
import TocModal from "./components/TocModal";

Vue.use(VueI18n);
Vue.use(VueFinalModal());
Vue.component('representativesModal', RepresentativesModal);
Vue.component('petitionModal', PetitionModal);
Vue.component('socialModal', SocialModal);
Vue.component('donationModal', DonationModal);
Vue.component('sidebarButtons', SidebarButtons);
Vue.component('modalLink', ModalLink);
Vue.component('tocModal', TocModal);

const i18n = new VueI18n({
    locale: document.documentElement.lang,
    messages: {
        en: ENGLISH_TRANSLATIONS,
        fr: FRENCH_TRANSLATIONS
    },
})

const app = new Vue({
    i18n,
}).$mount('#app');
window.app = app;
window.i18n = i18n;

drawChart();

let ql = new Quicklinks(
    document.getElementsByClassName('quicklink'),
    document.getElementById('hero--cta')
);