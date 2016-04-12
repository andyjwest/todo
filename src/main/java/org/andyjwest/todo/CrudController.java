package org.andyjwest.todo;

import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Andy on 4/10/2016.
 */
@Controller
@RequestMapping("/api")
public class CrudController {

    @Resource
    ToDoService toDoService;

    @RequestMapping(value = "todoes",
            method = RequestMethod.GET,
            produces =  MediaType.APPLICATION_JSON_VALUE)
    public List<ToDo> getToDos(){
        return toDoService.getToDos();
    }


    @RequestMapping(value = "todoes",
            method = RequestMethod.POST,
            produces =  MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ToDo createToDo(@RequestBody ToDo toDo){
        return toDoService.updateToDo(toDo);
    }

    @RequestMapping(value = "todoes/{id}",
            method = RequestMethod.POST,
            produces =  MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ToDo updateToDo(@RequestBody ToDo toDo){

        return toDoService.updateToDo(toDo);
    }

    @RequestMapping(value = "todoes/{id}", method = RequestMethod.DELETE)
    public void deleteToDo(@PathVariable Long id){
        toDoService.deleteToDo(id);
    }
}
