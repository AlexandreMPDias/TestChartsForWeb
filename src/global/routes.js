import Home from '../pages/home/home.vue';
import Chartist from '../pages/chartist/chartist.vue';
import D3js from '../pages/dthreejs/dthreejs.vue';

export const routes = [
    { path: '/chartist', component: Chartist, titulo: 'Chartist'},
    { path: '/dthreejs', component: D3js, titulo: 'D3js' },
    { path: '', component: Home, titulo: 'Home'}
];
