package org.andyjwest.todo;

import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Andy on 4/10/2016.
 */
@Component
public class ToDoService {

    @Resource
    ToDoRepository toDoRepository;

    public List<ToDo> getToDos(){
        ArrayList<ToDo> toDos = new ArrayList<>();
        for(ToDo todo : toDoRepository.findAll()){
            toDos.add(todo);
        }
        return toDos;
    }

    public ToDo createToDo(ToDo toDo){

        return toDo;
    }

    public ToDo updateToDo(ToDo toDo){
        return toDoRepository.save(toDo);
    }

    public void deleteToDo(Long id){
        toDoRepository.delete(id);
    }
}
