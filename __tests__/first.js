const todoList = require("../todo");
const { whole, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Testing the todo list", () => {
  beforeAll(() => {
    add({
        title:"adding todo items",
        completed:true,
        dueDate:new Date().toLocaleDateString("en-CA"),
    });
});
let length = whole.length;
 test("A test that checks creating a new todo.", () => {
    expect(whole.length).toBe(1);
   });
 test("checks marking a todo as completed.",()=>{
    markAsComplete(0);
    expect(whole[0].completed).toBe(true);
 });



 let overduelist = overdue();
 test("checks retrieval of overdue items.",()=>{
    expect(
        overduelist.every((todo)=>{
        return todo.dueDate < new Date().toLocaleDateString("en-CA")})).toBe(true);
    });
let duetodaylist=dueToday();
test("checks retrieval of due today items.",()=>{
    expect(
        duetodaylist.every((todo)=>{
        return todo.dueDate===new Date().toLocaleDateString("en-CA")})).toBe(true);
    });
let duelaterlist=dueLater();
test("checks retrieval of due later items.",()=>{
    expect(
        duelaterlist.every((todo)=>{
            return todo.dueDate>new Date().toLocaleDateString("en-CA")})).toBe(true);
        });
});