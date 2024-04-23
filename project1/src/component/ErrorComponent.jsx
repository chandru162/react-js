import React, { Component } from 'react'

export default class ErrorComponent 
    extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             hasError :false
          }
        }
        static  getDerivedStatefromEnd(){
            return {
                hasError:true
            }
        }
   render() {
    if(this.state.hasError){
        return<h1> Somthig WRONG</h1>
    }
    else{
        return<h1>{this.props.childran}</h1>
    }

  }
}
