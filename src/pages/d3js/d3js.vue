<template>
    <div>
        <page :title="title"></page>
        <div id="d3jstest">
            <sample></sample>
        </div>
        <md class="text-justify pl-5 pr-5">{{ conclusion }}</md>
    </div>
</template>


<script>
import Page from '../../components/shared/Display';
import VueMarkdown from 'vue-markdown';

import Table from '../../assets/data/table2';

import chart from './d3js';
import text from './d3js-text';

import sample from './sampled3.vue';

export default {
        components: {
        page: Page,
        md: VueMarkdown,
        sample,
    },

    data() {
        return {
            title: 'D3js',
            conclusion: text.conclusion,
            data: Table.data,
            }
    },
}
</script>
