import React from 'react';
import Immutable from 'immutable';

var ToDo = React.createClass({
    propTypes: {
        toDo: React.PropTypes.object.isRequired
    },

    _onDone: function (e) {
        var toDo = this.props.toDo.toJS();
        toDo.done = e.target.checked;
        this.props.updateToDo(Immutable.fromJS(toDo));
    },

    _onRename: function (e) {
        var toDo = this.props.toDo.toJS();
        toDo.description = e.target.value;
        this.props.updateToDo(Immutable.fromJS(toDo));
    },
    render: function(){
        var description = <input type="text" value={this.props.toDo.get('description')} onChange={this._onRename}/>;
        if(this.props.toDo.get('done')){
            description = <input type="text" value={this.props.toDo.get('description')} onChange={this._onRename} disabled/>
        }
        return (
            <div>
                <input type="checkbox" checked={this.props.toDo.get('done')} onChange={this._onDone}/>
                {description}
            </div>)
    }
});

export default ToDo;