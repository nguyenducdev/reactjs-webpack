var React = require('react');
var Note = require('Note');
var NoteFrom = require('NoteForm');
import { connect } from 'react-redux';

var List = React.createClass({

    render() {
        return (
            <div>
                <NoteFrom />
                {this.props.mang.map((e, i) => {
                    return <Note key={i} index={i}>{e}</Note>
                })}
            </div>
        );
    }
});
module.exports = connect(function (state) {
    return { mang: state.mang }
})(List);