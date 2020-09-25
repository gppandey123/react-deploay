import React,{useState} from 'react';
// import Home from './Component/Home/Home';
// import About from './Component/About';
import Contact from './Component/Contact';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import './App.css'

const App = () => {
  const [inputFields , setInputField] = useState([
    {fname: " " , lname : ""},
  ])
  return (
    <Container className="App">
      <h1>Dynamic table</h1>
      {/* <Home /> */}
      {/* <Contact /> */}
      <form>
        {
          inputFields.map((inputField , index) => {
            return (
              <div>
                <TextField name="fname" label="fname"
                variant="filled"
                value={inputField.fname}/>
                 <TextField name="lname" label="lname"
                variant="filled"
                value={inputField.lname}/>
              </div>
            )
          })
        }
      </form>
    </Container>
  )
}

export default App
