var React = require('react');
import { connect } from 'react-redux';
import { addItem } from 'action';

var NoteFrom = React.createClass({
    add() {
        var v = this.refs.txt.value;
        this.refs.txt.value = '';
        var { dispatch } = this.props;
        dispatch(addItem(v));
    },

    render() {
        return (
            <div>
                <input type="text" ref="txt" placeholder="enter your note" />
                <br />
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
});

module.exports = connect(function (state) {
    return { mang: state.mang }
})(NoteFrom);