import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as myactions from '../action_creators/index';




class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
           num : {
              num1: 0,
              num2: 0,
            
           }
        }
     }
     updateState(name, value){
        var num = this.state.num;
        
        if(name==="num1")
            num.num1 = parseInt(value, 10)
        if(name==="num2")
            num.num2 = parseInt(value, 10)

        this.setState({num});
      }
    render() {
        return (
            <div className="container">
 
   
                <div className="row">
                    
                    <div className="col">
                    
                    <div className="card">
                        <div className="card-header mdb-color lighten-1 white-text">
                            Calculator
                        </div>
                        <div className="card-body">
                        <div className="md-form form-sm">
                            <input type="number" id="num1" className="form-control" 
                             onChange={e => this.updateState('num1',e.target.value)}/>

                            <label htmlFor="num1" className="">First Number</label>
                        </div>
                        <div className="md-form">
                            <input type="number" id="num2" className="form-control"
                            onChange={e => this.updateState('num2',e.target.value)} />
                            <label htmlFor="num2" className="">Second Number</label>
                        </div>
                        <button type="button" className="btn btn-default"
                        onClick={()=>this.props.Operation(this.state.num,"add")}>ADDITION</button>

                       
                        <button type="button" className="btn btn-secondary"
                        onClick={()=>this.props.Operation(this.state.num,"sub")}>subtraction</button>

                       
                        <button type="button" className="btn btn-warning"
                        onClick={()=>this.props.Operation(this.state.num,"mul")}>MULTIPLICATION</button>

                        
                        <button type="button" className="btn btn-info"
                        onClick={()=>this.props.Operation(this.state.num,"div")}>DIVISION</button>
                     
                        <div className="md-form">
                           
                            <input type="text" id="result" placeholder="Result" className="form-control" value={this.props.result.result}/>
                           
                            
                        </div>
                        
                        
                        </div>
                    </div>
                    
                    
                   
                    </div>
                </div>
            </div>
          
        );
    }
}
function mapStateToProps(state){
   
    return{
       
        result : state.calc
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators(myactions,dispatch)
  
    
}


export default connect(mapStateToProps,matchDispatchToProps)(Index);