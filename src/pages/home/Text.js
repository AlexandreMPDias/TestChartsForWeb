let text = `
## Testing for Multiple Chart's Frameworks.

This project generates charts using different kinds of Chart's Framework.
On the right side, each button shows a Test for a single framework.

### Buttons:

| Color | Status |
| - | -
| Gray | Tests haven't even started
| Blue | Construction tests done, Commentary added. Perfomance Tests still pending.
| Green | All Tests concluded. Commentary added.

---

### What is being tested:

This project tests a Chart Framework in different ways, such as:
- How easy it is to pass data in JSON format to the framework.
- How much reuse you can get from the code written for each chart.
- How fast is the framework in generatting each chart. *[ aka: Perfomance Tests ]*
- How much flexibility each chart has. *[ ex: How much can when change a chart from its default settings ]*

---

### Tests:

| Framework | Status | Comments
| - | - | - |
| Google Charts using a Vue Wrapper | Tested | Missing Perfomance Tests
| Chartjs using Vue Wrapper | Tested | Missing Perfomance Tests
| Chartist | Tested | Tests failed without Bower
| D3js | Tests pending | - 

---

### Browsers:

So far, the this project only works on Google Chrome.


`;

module.exports={
    text
}