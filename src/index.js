import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 
import App from './components/App';
 
import NavBar from './components/NavBar';
 

ReactDOM.render(( //4
 
    <MuiThemeProvider>
        <div>
            
            <NavBar/>

            <App />
          


        </div>


    </MuiThemeProvider>
 
 )
 

 , document.getElementById('root'));
 
