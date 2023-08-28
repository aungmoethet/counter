import React, { Component } from 'react';
class Set extends Component {
    state = {
        message : 0
      } 

      increase= ()=>{
        this.setState({
            message : this.state.message +1
        })
    }
        restart= ()=>{
            this.setState({
                message : 0     
            })
      }
    render() { 
        return (
            <>
           <div className=' h-96 inline-flex items-center content-center '>
           <div className=' bg-white w-56 h-80 rounded-2xl pt-10 px-5 border-2 drop-shadow-lg'>
           <div className='' >
           <div className=' bg-slate-300 rounded-lg w-full h-10 pt-2 drop-shadow-md'>
           <h1 className=' text-slate-700 text-right mr-3'>{this.state.message}</h1>
           </div>
           <div className=' mt-4'> 
            <p className=' text-xs text-left'>Restart</p>
           <button onClick={this.restart} className=' drop-shadow-xl rounded-full bg-slate-300 text-white w-10 h-10 hover:bg-slate-400  block '></button>
           </div>
            <button onClick={this.increase} className=' drop-shadow-xl rounded-full bg-slate-300 w-20 h-20 mt-10 text-black hover:bg-slate-400 '>Count</button>
           
           </div>
           </div>
           </div>
            </>
        )
    }
}
 
export default Set;