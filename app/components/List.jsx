var React = require('react');
var Note = require('./Note.jsx');
var NoteFrom = require('./NoteForm.jsx');

var List = React.createClass({

    getInitialState() {
        return {
            mang: ['andriod', 'ios', 'react-native']
        }
    },

    del(index) {
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    },

    add(txt){
        this.state.mang.push(txt);
        this.setState(this.state);
    },

    render() {
        return (
            <div>
                <NoteFrom add={this.add}/>
                {this.state.mang.map((e, i) => {
                    return <Note key={i} remove={this.del} index={i}>{e}</Note>
                })}
            </div>
        );
    }
});
module.exports = List;