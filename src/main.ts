import { createSSRApp } from 'vue';
import uviewPlus from 'uview-plus';
import App from './App.vue';
import store from './store/store';
import share from './share';

export function createApp() {
    const app = createSSRApp(App);
    app.use(store);
    app.use(uviewPlus);
    uni.$u.config.unit = 'rpx';
    console.log('uni', uni);
    app.mixin(share);
    return {
        app
    };
}
