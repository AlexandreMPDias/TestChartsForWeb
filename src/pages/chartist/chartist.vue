<template>
    <div>
        <h1 class="alert alert-warning" role="alert">Chartist</h1>
        <div ref="chart1" id="chart1" class="ct-chart ct-perfect-fourth"/>
        <div ref="chart2"/>
        <div ref="chart3"/>
    </div>
</template>


<script>
import chart from './chartist';


export default {
    data() {
        return {
            dataChar: chart.data
        }
    },
    mounted () {
    // elements have been created, so the `ref` will return an element.
    // but the elements have not necessarily been inserted into the DOM yet.
    // you can use $nextTick() to wait for that to have happened.
    // this is espeically necessary if you want to to get dimensions or position of that element.
    this.$nextTick( () => {
        console.log(this.$refs.chart1.id);
        chart.render(this.$refs.chart1);
    })
    }
}
</script>

<style scoped>

</style>