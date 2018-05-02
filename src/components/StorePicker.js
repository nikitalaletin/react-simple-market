import React from 'react';
import PropTypes from 'prop-types';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    };

    goToStore = (event) => {
        //1. prevent default reload
        event.preventDefault();
        //2. get the input value
        const storeName = this.myInput.current.value;
        //3. change the page to /store/whatever
        this.props.history.push(`store/${storeName}`);
    };
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h1>Hello Little Fucker!</h1>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store -></button>
            </form>

        )
    }
}

export default StorePicker;