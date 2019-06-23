import Vue from 'vue';
import FooterComponent from '~/components/footer/FooterComponent.vue';
import HeaderComponent from '~/components/header/HeaderComponent.vue';
import MainBanner from '~/components/main_banner/MainBanner.vue';
import Buttons from '~/components/buttons/Buttons.vue';


const components = {
    FooterComponent,
    HeaderComponent,
    MainBanner,
    Buttons
}

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component);
});