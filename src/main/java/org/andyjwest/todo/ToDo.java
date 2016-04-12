package org.andyjwest.todo;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by Andy on 4/10/2016.
 */
@Entity(name = "to_do")
public class ToDo {

    private @Id @GeneratedValue Long id;
    private String description;
    private boolean done;

    public ToDo(){

    }

    public ToDo(String description) {
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

}
