import React from 'react';

class Calculator extends React.Component {
  calcHtml = (
    <div className="calc-wrapper">
      <input type="text" className="inp-display" placeholder={0} />
      <div className="grid">
        <div className="calc-btn"> AC </div>
        <div className="calc-btn"> +/- </div>
        <div className="calc-btn"> % </div>
        <div className="calc-btn op"> + </div>
        <div className="calc-btn"> 7 </div>
        <div className="calc-btn"> 8 </div>
        <div className="calc-btn"> 9 </div>
        <div className="calc-btn op"> * </div>
        <div className="calc-btn"> 4 </div>
        <div className="calc-btn"> 5 </div>
        <div className="calc-btn"> 6 </div>
        <div className="calc-btn op"> - </div>
        <div className="calc-btn"> 1 </div>
        <div className="calc-btn"> 2 </div>
        <div className="calc-btn"> 3 </div>
        <div className="calc-btn op"> + </div>
        <div className="calc-btn zero-btn"> 0 </div>
        <div className="calc-btn"> . </div>
        <div className="calc-btn op"> = </div>
      </div>
    </div>
  );

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.calcHtml;
  }
}

export default Calculator;
