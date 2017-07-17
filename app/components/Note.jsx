var React = require('react');
import { connect } from 'react-redux';
import { removeItem } from 'action';
var Note = React.createClass({
    del() {
        var { dispatch } = this.props;
        dispatch(removeItem(this.props.index));
    },
    render() {
        return (
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.del}>Delete</button>
            </div>
        );
    }
});
module.exports = connect(function (state) {
    return { mang: state.mang }
})(Note);