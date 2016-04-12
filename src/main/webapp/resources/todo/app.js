import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Immutable from 'immutable';

import ToDo from './ToDo'

var ToDoList = React.createClass({
    getInitialState: function () {
        return {"toDoList": Immutable.List([])};
    },
    componentDidMount: function() {
        $.ajax({
            url: "api/todoes.json",
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({'toDoList': Immutable.fromJS(data.toDoList)});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("api/todoes.json", status, err.toString());
            }.bind(this)
        });
    },


    _addToDo: function () {
        var toDoes = this.state.toDoList;
        var updateState = this._updateList;
        $.ajax({
            type: "POST",
            url: "api/todoes.json",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({"description": this.refs.newToDoText.value}),
            success: function(data) {
                var newToDoes = toDoes.push(Immutable.fromJS(data.toDo));
                updateState(newToDoes);
            },
            error: function(xhr, status, err) {
                console.error("api/todoes.json", status, err.toString());
            }
        })
    },

    _updateList: function (data) {
        this.setState({toDoList: data});
    },

    _updateToDoItem: function (toDo){
        var toDoes = this.state.toDoList;
        var updateState = this._updateList;
        $.ajax({
            type: "POST",
            url: "api/todoes/"+ toDo.get('id')+".json",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(toDo.toJS()),
            success: function(data) {
                var newToDoes = toDoes.update(
                    toDoes.findIndex(function(item) {
                        return item.get("id") === toDo.get("id");
                    }), function(item) {
                        return item.merge(Immutable.fromJS(data.toDo));
                    }
                );
                updateState(newToDoes);
            },
            error: function(xhr, status, err) {
                console.error("api/todoes.json", status, err.toString());
            }
        })
    },
    
    render: function(){
        var updateToDo = this._updateToDoItem;
        var toDoes = Immutable.fromJS([]);
        var doneToDoes = Immutable.fromJS([]);

        this.state.toDoList.map(function(toDo){
            if(toDo.get('done')){
                doneToDoes = doneToDoes.push(toDo);
            }else{
                toDoes = toDoes.push(toDo);
            }
        });

        var toDoNodes = toDoes.map(function (toDo) {
            return (
                <ToDo key={toDo.get('id')} toDo={toDo} updateToDo={updateToDo}/>
            )
        });
        var doneToDoNodes = doneToDoes.map(function (toDo) {
            return (
                <ToDo key={toDo.get('id')} toDo={toDo} updateToDo={updateToDo} />
            )
        });
        return (
            <div>
                <input type="text" ref="newToDoText" placeholder="What needs to get done?"/>
                <button onClick={this._addToDo}>Add ToDo</button>
                {toDoNodes}
                <br />
                Things that got done
                {doneToDoNodes}
            </div>)
    }
});

ReactDOM.render(
    <ToDoList />,
    document.getElementById('react')
);