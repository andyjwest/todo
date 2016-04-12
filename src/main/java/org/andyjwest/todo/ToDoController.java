package org.andyjwest.todo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by Andy on 4/10/2016.
 */
@RequestMapping("/")
@Controller
public class ToDoController {

    @Resource
    ToDoService toDoService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(Map<String, Object> model) {

        model.put("title", "ToDoes");

        return "index";
    }
}
