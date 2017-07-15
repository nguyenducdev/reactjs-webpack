var React =  require('react');

var NoteFrom = React.createClass({
    add(){
        var v = this.refs.txt.value;
        this.refs.txt.value = '';
        this.props.add(v);
    },

    render(){
        return (
            <div>
                <input type="text" ref="txt" placeholder="enter your note"/>
                <br/>
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
});
module.exports = NoteFrom;