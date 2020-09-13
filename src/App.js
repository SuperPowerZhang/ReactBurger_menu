import React from 'react';
import './App.css';
import TopApp from './topApp';
import MainApp from './MainApp';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topSideDisplay: false,
      topRightDisplay: false,
      topClothesDisplay: false
    }
  }
  //修改左边列表的显示与否
  changeTopSideDisplay() {
    this.setState({
      topSideDisplay: !this.state.topSideDisplay, topClothesDisplay: !this.state.topClothesDisplay
    }, () => {
      this.displayLeft()
    })
  }
  //修改右边列表的显示与否状态
  changeTopRightDisplay() {
    this.setState({
      topRightDisplay: !this.state.topRightDisplay, topClothesDisplay: !this.state.topClothesDisplay
    }, () => {
      this.displayRight()
    })
  }
  //实现左边列表的显示与隐藏
  displayLeft() {
    if (this.state.topSideDisplay) {
      document.getElementsByClassName('leftlist')[0].classList.add('display');
    } else {
      document.getElementsByClassName('leftlist')[0].classList.remove('display');
    }
    this.displayClothes();
  }
  //实现右边列表的显示与隐藏
  displayRight() {
    if (this.state.topRightDisplay) {
      document.getElementsByClassName('rightlist')[0].classList.add('display');
    } else {
      document.getElementsByClassName('rightlist')[0].classList.remove('display');
    }
    this.displayClothes();
  }
  displayClothes() {
    if (this.state.topClothesDisplay) {
      document.getElementsByClassName('clothes')[0].classList.add('display');
    } else {
      document.getElementsByClassName('clothes')[0].classList.remove('display');
    }
  }
  handleClickHid(e) {
    console.log(e.clientX);
    console.log(document.body.clientWidth - e.clientX);
    if (this.state.topSideDisplay) {
      console.log("现在判断左边");
      e.clientX > 300 ? this.changeTopSideDisplay() : console.log(11);
    } else if (this.state.topRightDisplay) {
      console.log('现在判断右边');
      document.body.clientWidth - e.clientX > 300 ? this.changeTopRightDisplay() : console.log(22);
    } else {
      console.log('两个都不显示');
    }
  }
  render() {
    return (
      <div className="app" onClick={this.handleClickHid.bind(this)} >
        <div className='clothes'></div>
        <TopApp changeSideDisplay={this.changeTopSideDisplay.bind(this)} changeRightDisplay={this.changeTopRightDisplay.bind(this)}></TopApp>
        <MainApp></MainApp>
      </div>
    );
  }
}

export default App;
