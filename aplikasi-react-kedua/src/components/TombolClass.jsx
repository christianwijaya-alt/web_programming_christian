import { Component } from 'react';

class TombolClass extends Component {
    handleClick = () => {
        alert(`Hello dari ${this.props.nama}`);
    };
    render() {
        return (
            <button onClick={this.handleClick}>
                Sapa User
            </button>
        );
    }
}
export default TombolClass;