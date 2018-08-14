<template>
    <div>
        <page :title="title"></page>
        <ColumnChart/>
        <PieChart/>

        <vue-markdown class="text-justify pl-5 pr-5" :source="desc" />
    </div>
</template>


<script>
import Page from '../../components/shared/Display';
import VueMarkdown from 'vue-markdown';
import chart from './vue-chartjs';
import Table from '../../assets/data/table2';

import CommitChart from './charts/Test';
import ColumnChart from './charts/Column';
import PieChart from './charts/Pie';

export default {
        components: { 
        page: Page,  
        "vue-markdown": VueMarkdown,
        CommitChart,
        ColumnChart,
        PieChart,
    },
    extends: VueMarkdown,
    data() {
        return {
            title: 'Vue-ChartJs',
            desc: chart.mdText()
        }
    },
}
</script>

<style scoped>

</style>