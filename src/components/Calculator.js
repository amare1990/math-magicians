/* const calcHtmlElem = parser.parseFromString(calcStr, 'text/html').body.firstChild;
calcWrapper.append(calcHtmlElem); */

class Calculator {
  calcStr = `
    <div class="calc-wrapper">
      <input type = "text" class ="inp-display" placeholder = 0>
      <div class = "grid">
        <div class ="calc-btn"> AC </div>
        <div class ="calc-btn"> +/- </div>
        <div class ="calc-btn"> % </div>
        <div class ="calc-btn op"> + </div>
        <div class ="calc-btn"> 7 </div>
        <div class ="calc-btn"> 8 </div>
        <div class ="calc-btn"> 9 </div>
        <div class ="calc-btn op"> * </div>
        <div class ="calc-btn"> 4 </div>
        <div class ="calc-btn"> 5 </div>
        <div class ="calc-btn"> 6 </div>
        <div class ="calc-btn op"> - </div>
        <div class ="calc-btn"> 1 </div>
        <div class ="calc-btn"> 2 </div>
        <div class ="calc-btn"> 3 </div>
        <div class ="calc-btn op"> + </div>
        <div class ="calc-btn zero-btn"> 0 </div>
        <div class ="calc-btn"> . </div>
        <div class ="calc-btn op"> = </div>
      </div>
    </div>
`;

  parseStr() {
    return this.calcStr;
  }
}

export default Calculator;
