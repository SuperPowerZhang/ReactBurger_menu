import { Component } from "react";
import React from "react"

class MainApp extends Component {
    handleChoose=(e)=>{
        let choicelist=document.querySelectorAll('.mainapp .choices a');
        for(let i=0;i<choicelist.length;i++){
            choicelist[i].classList.remove('choosed')
        }
        e.target.classList.add('choosed');   
    }
    render() {
        return (
            <div className='mainapp'>
                <h2>An off-canvas sidebar React component with a collection of effects and styles using CSS transitions and SVG path animations.</h2>
                <div className='choices'>
                    <ul>
                        <li ><a className='choosed' href='javascript:;' onClick={this.handleChoose}>SLIDE</a></li>
                        <li><a href='javascript:;' onClick={this.handleChoose}>STACK</a></li>
                        <li><a href='javascript:;' onClick={this.handleChoose}>ELASTIC</a></li>
                        <li><a href='javascript:;' onClick={this.handleChoose}>BUBBLE</a></li>
                        <li><a href='javascript:;' onClick={this.handleChoose}>PUSH</a></li>
                        <li><a href='javascript:;' onClick={this.handleChoose}>PUSH ROTATE</a></li>
                        <li><a href='javascript:;' onClick={this.handleChoose}>STACK</a></li>
                        <li><a href='javascript:;' onClick={this.handleChoose}>ELASTIC</a></li>
                        <li><a href='javascript:;' onClick={this.handleChoose}>BUBBLE</a></li>
                        <li><a href='javascript:;' onClick={this.handleChoose}>PUSH</a></li>
                    </ul>
                <p>Inspired by <a href='javascript:;'>Off-Canvas Menu Effects</a> and <a href='javascript:;'>Sidebar Transitions</a> by Codrops</p>
                </div>
            </div>
        )
    }
}
export default MainApp;