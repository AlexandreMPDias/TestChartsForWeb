var addHeader = function(array) {
    var arr = [];
    var header = Object.keys(array[0]);
    arr = array.map( ( e ) => {
        var a = [];
        for(let key in e){
            a.push(e[key]);
        }
        return a;
    })
    arr.unshift(header);
    return arr;
}

var mdText = function() {
    return `
---


## Created using Google Charts's wrapper for Vuejs by devstark  
  

**Github:** https://github.com/devstark-com/vue-google-charts
  
---

## Requirements
- Node.js
- npm  
- npm's vue-google-charts package

---
  

## Perfomance Tests

N/A

---


## Conclusion

-Very simple construction for each graph.
-Somewhat unique configuration and data_input for each graph.
-Flexible Graphs
-Hard to create really stylish graphs.

---

## Problems
-Doesnt work with no/slow internet.
`;
}


module.exports = {
    addHeader,
    mdText
};