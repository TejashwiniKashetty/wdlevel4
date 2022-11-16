const todoList = () => {
  whole = [];
  const add = (todoItem) => {
    whole.push(todoItem);
  };
  const markAsComplete = (index) => {
    whole[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");
  // let today = new Date().toISOString().split("T")[0];

  const overdue = () => {
    return whole.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const dueToday = () => {
    return whole.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const dueLater = () => {
    return whole.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == today ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    whole,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;

