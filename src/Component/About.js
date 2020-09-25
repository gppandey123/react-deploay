import React from 'react';


class About extends React.Component {
    constructor(){
      super();
      this.state ={
        // users: ['abc',"pdsa","eccs","koi"],
        input: '',
      }
    }
  
    onChangeHandler(e){
      this.setState({
        input: e.target.value,
      })
    }
  
    render (){
        const list = this.props.data
          .filter(d => this.state.input === '' || d.includes(this.state.input))
          .map((item ,index) => {
            return (
                <tr key ={index}>
                    <td>{item}</td>
                    <td><button><i className="fas fa-edit"></i></button></td>
                    <td><button onClick ={ () => this.delete(index)}>
                        <i className="fas fa-trash"></i></button></td>
                </tr>
            );
        })
  
      return (<div>
        <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
          <ul>{list}</ul>
        </div>)
    }
  }

  export default About;