import  React, {Component} from  'react'
import  Detail from "../views/detail"
import  Task from "../views/task"
class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            content:"给子组件传递东",
            sendData:""
        }
    }
    changeMsg=(content)=>{
        console.log(22)
        this.setState({
            sendData:content
        })
    }
    getchangeMsg=(data)=>{
        console.log(data)
        this.setState({
            sendData:data
        })
    }
     render(){
         let {content,sendData}=this.state
         console.log(sendData)
       return (
           <div>
               index页面
               <Detail sendData={sendData} content={content} changeMsg={this.changeMsg}/>
               <Task getchangeMsg={this.getchangeMsg} />
           </div>
       )
     }
 }
 export default Index