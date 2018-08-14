import Home from '../pages/home/home.vue';
import Chartist from '../pages/chartist/chartist.vue';
import D3js from '../pages/d3js/d3js.vue';
import GoogleCharts from '../pages/google/googleCharts.vue';
import VueChartJs from '../pages/vue~chartjs/vue-chartjs.vue';

export const routes = [
    { path: '/chartist', component: Chartist, titulo: 'Chartist', status: -1},
    { path: '/d3js', component: D3js, titulo: 'D3js', status: -1 },
    { path: '/googleCharts', component: GoogleCharts, titulo: 'GoogleCharts', status: 1},
    { path: '/chartjs', component: VueChartJs, titulo: 'Vue-ChartJs', status: 1},

    
    { path: '', component: Home, titulo: 'Home', type: 0}
];
