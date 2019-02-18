import  React, {Component} from  'react'

class Task extends Component{
    changeMsg=()=>{
        let {
            getchangeMsg
        }=this.props
        getchangeMsg('task也组件传递的勒')
    }
     render(){
    
       return (
           <div>
               task页面
               <button onClick={this.changeMsg}>我也要修改detail东西</button>
           </div>
       )
     }
 }
 export default Task