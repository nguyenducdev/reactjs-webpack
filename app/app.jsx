var React = require('react');
var ReactDOM = require('react-dom');



var Note = React.createClass({
    del() {
        this.props.remove(this.props.index);
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

    render() {
        return (
            <div>
                {this.state.mang.map((e, i) => {
                    return <Note key={i} remove={this.del} index={i}>{e}</Note>
                })}
            </div>
        );
    }
});


ReactDOM.render(
    <List />,
    document.getElementById('root')
);