import { Pie } from 'vue-chartjs'
import Table from '../../../assets/data/table2'

let colors = ['#e0440e', '#e6693e', '#ec8f6e','#f3b49f'];

function getDataSet(data){
    let ar = [];
    let years = ['Year'];
    let sales = ['Sales'];
    let exp = ['Expenses'];
    let pro = ['Profit'];
    var a = data.map( e => {
        years.push(e.Year);
        sales.push(e.Sales);
        exp.push(e.Expenses);
        pro.push(e.Profit);
    });
    let ret = [];
    ar.push(years); ar.push(sales); ar.push(exp); ar.push(pro);
    for(let i = 0; i < ar.length; i++){
        let dat = [];
        for(let j = 1; j < ar[i].length; j++){
            dat.push(ar[i][j]);
        }
        let ds = {
            label: ar[i][0],
            data: dat,
            backgroundColor: colors[i+1]
        }
        ret.push(ds);
    }
    return ret;
}

function getLabels(data){
    let ar = [];
    data.map(e =>{
        ar.push(e.Year);
    });
    return ar;
}

export default {
    extends: Pie,
    data() {
        return {
            data: {
                labels: Object.keys(Table.data[0]),
                datasets: getDataSet(Table.data)
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    yAxes: [{
                        display: true,
                    }]
                },
                title: {
                    display: true,
                    text: name
                },
                tooltips: {
                    mode: 'index',
                    intersect: true,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                }
            }
        }
    },
    mounted () {
        // Overwriting base render method with actual data.
        this.renderChart(this.data, this.options);
    }
}