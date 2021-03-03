import React, { Component } from 'react'

class NoMatch extends Component {
    render(){
        return (
            <div style={{ 
                display: 'block',
                background: 'red',
                color: 'white',
                margin: 15,
                padding: 15
            }}>
                Page Not Found
            </div>
        );
    }
}

export default NoMatch;
