import  React, {Component} from  'react'

class Detail extends Component{
    changeMsg=()=>{
     
        let{
            changeMsg
        }=this.props
        console.log(this.props)
        changeMsg('该饿了')
    }
     render(){
         let {sendData}=this.props
       return (
           <div>
               detail页面
               {
                   sendData
               }
               <button onClick={this.changeMsg}>改变content</button>
               
           </div>
       )
     }
 }
 export default Detail