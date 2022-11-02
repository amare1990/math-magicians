/* const calcHtmlElem = parser.parseFromString(calcStr, 'text/html').body.firstChild;
calcWrapper.append(calcHtmlElem); */

class Calculator {
  calcStr = `
    <div class="calc-wrapper">
      <input type = "text" class ="inp-display" placeholder = 0>
      <div class = "row first-row">
        <div class ="grid"> AC </div>
        <div class ="grid"> +/- </div>
        <div class ="grid"> % </div>
        <div class ="grid"> + </div>
      </div>
      <div class = "row second-row">
        <div class ="grid"> 7 </div>
        <div class ="grid"> 8 </div>
        <div class ="grid"> 9 </div>
        <div class ="grid"> * </div>
      </div>
      <div class = "row third-row">
        <div class ="grid"> 4 </div>
        <div class ="grid"> 5 </div>
        <div class ="grid"> 6 </div>
        <div class ="grid"> - </div>
      </div>
      <div class = "row fourth-row">
        <div class ="grid"> 1 </div>
        <div class ="grid"> 2 </div>
        <div class ="grid"> 3 </div>
        <div class ="grid"> + </div>
      </div>
      <div class = "row fourth-row">
        <div class ="grid"> 0 </div>
        <div class ="grid"> . </div>
        <div class ="grid"> = </div>
      </div>
    </div>
`;

  parseStr() {
    return this.calcStr;
  }
}

export default Calculator;
