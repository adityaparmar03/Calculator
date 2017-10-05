import {combineReducers} from 'redux'

var initalstate ={
    result:""
}
export const calc = (state=initalstate,action)=>{
    
    if(action.type === "RESULT"){
        return{
            ...state,
            result:action.payload.result,
          
        }
    }
    
   
    return state;
}




export default combineReducers({
    
    calc
    

});