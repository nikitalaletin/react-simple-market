import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h1>Hello Little Fucker!</h1>
                <input type="text" required placeholder="Store name"/>
                <button type="submit">Visit Store -></button>
            </form>

        )
    }
}

export default StorePicker;
