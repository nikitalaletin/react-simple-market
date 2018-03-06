import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    render () {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market" age={100}/>
                    <Header tagline="Meat seafood market"/>
                </div>
                <Order/>
                <Inventory/>
            </div>
        )
    }
}

export default App;