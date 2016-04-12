package org.andyjwest.todo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Andy on 4/10/2016.
 */
public interface ToDoRepository extends CrudRepository<ToDo, Long> {
}
