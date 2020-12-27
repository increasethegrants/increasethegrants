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

Vue.use(VueI18n);
Vue.use(VueFinalModal());
Vue.component('representativesModal', RepresentativesModal);
Vue.component('petitionModal', PetitionModal);
Vue.component('socialModal', SocialModal);
Vue.component('sidebarButtons', SidebarButtons);

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



console.log(app.$vfm.modals);

drawChart();