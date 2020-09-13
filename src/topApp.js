import { Component } from "react";
import React from "react"

 class TopApp extends Component{
     constructor(props){
         super();
     }
    handleClickLeft(){
        this.props.changeSideDisplay();
    }
    handleClickRight(){
        this.props.changeRightDisplay();
    }
    handleClickCloseLeft=()=>{
        this.props.changeSideDisplay();
    }
    handleClickCloseRight=()=>{
        this.props.changeRightDisplay();
    }
    handleChangeSelect(e){
        let alist=document.querySelectorAll('.topapp p a');
        let btnlist=document.querySelectorAll('.btn');
        for(let i=0;i<alist.length;i++){
            alist[i].classList.remove('selected'); 
            btnlist[i].classList.remove('selected'); 
    }
    console.log(e.target.getAttribute('id'));
    console.log(document.querySelector('.leftbtn'));
    let btnid=e.target.getAttribute('id');
    btnid==='left'?document.querySelector('.leftbtn').classList.add('selected'):document.querySelector('.rightbtn').classList.add('selected');
    e.target.classList.add('selected');
}
    render() {
        return (
            <div className='topapp'>
                <div className="btn leftbtn selected" onClick={this.handleClickLeft.bind(this)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <button ></button>
                </div>
                <div className='sidelist leftlist'>
                <p onClick={this.handleClickCloseLeft}></p>
                    <ul>
                        <li><span></span><a href='javascript:;'>Favorites</a></li>
                        <li><span></span><a href='javascript:;'>Alerts</a></li>
                        <li><span></span><a href='javascript:;'>Messages</a></li>
                        <li><span></span><a href='javascript:;'>Comments</a></li>
                        <li><span></span><a href='javascript:;'>Analytics</a></li>
                        <li><span></span><a href='javascript:;'>Reading List</a></li>
                    </ul>
                </div>
                <div className="btn rightbtn" onClick={this.handleClickRight.bind(this)} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <button ></button>
                </div>
                <div className='sidelist  rightlist'>
                <p onClick={this.handleClickCloseRight}></p>
                    <ul>
                        <li><span></span><a href='javascript:;'>Favorites</a></li>
                        <li><span></span><a href='javascript:;'>Alerts</a></li>
                        <li><span></span><a href='javascript:;'>Messages</a></li>
                        <li><span></span><a href='javascript:;'>Comments</a></li>
                        <li><span></span><a href='javascript:;'>Analytics</a></li>
                        <li><span></span><a href='javascript:;'>Reading List</a></li>
                    </ul>
                </div>
                <h1>
                    <a>react-burger-menu</a>
                </h1>
                <p className='test'><a className='lefta selected' id='left' href='javascript:;' onClick={this.handleChangeSelect.bind(this)}>LEFT</a><a onClick={this.handleChangeSelect.bind(this)} id='right' clsssName='righta' href='javascript:;'>RIGHT</a></p>
            </div>
        )
    }
}
export default TopApp;