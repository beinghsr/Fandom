import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import '../css/sidebar.css';
import Homepage from './homepage';
import Locations from './locations';
import Characters from './characters';
import Episodes from './episodes';

function Sidebar(){
    return(
        <div>
            <div className="sidebar">
                <BrowserRouter>
                    <Link className="s-link" to="/" replace>Home</Link>
                    <Link className="s-link" to="/locations" replace>Locations</Link>
                    <Link className="s-link" to="/characters" replace>Characters</Link>
                    <Link className="s-link" to="/episodes" replace>Episodes</Link>

                    <Route
                        path="/"
                        component={Homepage}
                        exact 
                    />
                    <Route
                        path="/locations"
                        component={Locations} 
                    />
                    <Route
                        path="/characters"
                        component={Characters} 
                    />
                    <Route
                        path="/episodes"
                        component={Episodes} 
                    />
                </BrowserRouter>
            </div>
            {/* <div className="content">
                <BrowserRouter>
                    
                </BrowserRouter>
            </div> */}
                
        </div>

    );
}

export default Sidebar;