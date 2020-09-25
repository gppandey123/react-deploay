import React, { Component } from 'react';
import About from '../About';

 class Home extends Component {
    state ={
        table : ["Gyan" ,"Ravi" ,"Rahul" ,"Mayank" ],
        text: "",
        Input: "",
        
       
    }
     tableData = () => {
      return  this.state.table.map((item ,index) => {
            return (
                <tr key ={index}>
                    <td>{item}</td>
                    <td><button><i className="fas fa-edit"></i></button></td>
                    <td><button onClick ={ () => this.delete(index)}>
                        <i className="fas fa-trash"></i></button></td>
                </tr>
            );
        })
    }

    edit = () => {
        console.log('edit');
    }
    delete = (index) => {
        
        const list =  this.state.table;
        console.log(list);

        list.splice(index, 1);
        this.setState({ list });
        console.log(list);

        
    }

    change = (e) => {
        let val =e.target.value;
        this.setState({text:val,
        });
        
        
    }

    change1 = (e) => {
        let val =e.target.value;
        this.setState({text1:val,
        });
        
        
    }
   
    
    Add = (e) => {
        let data = this.state.table;
        data.push(this.state.text);
        this.setState({
            table:[ ...data,],
            text: " "
        })
        this.refs.someName.value = '';
  
    }
   
   
     
   
    

   
    

    render() {
       
        return (
            <div>
                 <About  change1 ={this.change1} data = {this.state.table}/>
                <input type="text" placeholder="Enter Your Name" onChange={this.change}
                ref="someName" />
                <button onClick={this.Add}>add</button>
                <table>
                    <tbody>
                       <tr>
                          <tr>s no</tr>
                           <th>Name</th>
                           <th><b>edit</b></th>
                           <th><b>delete</b></th>
                       </tr>
                       {this.tableData()}
                       
                    
                       
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home
