<template>
    <div>
        <page :title="header"></page>
        <div class="text-center d-flex flex-column pt-4 pb-4 m-auto w-100">
            <GChart
                type="ColumnChart" 
                :data="data" 
                :options="options.bar" 
            />
            <div @mouseover="spin">
                <GChart
                    type="PieChart" 
                    :settings="settings.donut"
                    :data="data" 
                    :options="options.pie" 
                    :resizeDebounce="1500"
                />
            </div>
            <!--<GChart
                
            />-->
        </div>
            <vue-markdown class="text-justify pl-5 pr-5" :source="desc" />
    </div>
</template>


<script>
import Page from '../../components/shared/Display';
import CenteredDiv from '../../components/shared/CenteredBlock';
import VueMarkdown from 'vue-markdown';

import { GChart } from 'vue-google-charts';
import chart from './googleCharts';
import Table from '../../assets/data/table2';

export default {
    components: {
        GChart, 
        page: Page, 
        cdiv: CenteredDiv, 
        "vue-markdown": VueMarkdown
    },
    data() {
        return {
            desc: chart.mdText(),
            data: chart.addHeader(Table.data),
            settings: {
                donut: {
                    packages: [
                        'corechart'
                    ]
                }
            },
            options: 
                {
                    bar: {
                        title: Table.title,
                        subtitle: Table.subtitle,
                        titleTextStyle: {color: 'black'},
                        vAxis: {
                            title: "",
                            textPosition: "in",
                            textStyle: {
                                fontSize: 10
                                }
                            },
                        legend: {
                            position:'top'
                        },
                        timeline: {
                            groupByRowLabel : true
                        },
                        tooltip: {
                            //isHtml: true
                        },
                        height: "100%",
                        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
                    },
                    pie: {
                        title: Table.title,
                        subtitle: Table.subtitle,
                        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                        pieHole: 0.2,
                        pieStartAngle: 50,
                        width: "100%"
                    }
            },
            header: 'Google Charts'
        }
    },
    methods:{
        spin: function(event){
            if(this.options.pie.pieStartAngle > 360){
                this.options.pie.pieStartAngle = 0;
            } else {
                this.options.pie.pieStartAngle = this.options.pie.pieStartAngle + 1;
            }
        }
    }
}
</script>

<style scoped>

</style>