//new
//list
//delete
//quit

const todo = [];
const newToDo = "Enter a new todo.";
let input = "";
//variable to keep the game running -- if false,
exitList = "true";

while (exitList !== "q") {
    if (input.toLowerCase() === "q") {
        break;
    }

    while (input !== "q") {
        console.log(
            "Menu:\n1- Display the to-do list.\n2- Delete a to-do.\n3- Add a new todo.\nq- Exit."
        );

        input = prompt("Select your option:");
        if (input === "1") {
            console.log("*****My todo list*****")
            for (let todos in todo) {
                console.log(`${todos}- ${todo[todos]}`);
            }
            console.log("\n") //for reading purposes
        } else if (input === "2") {
            console.log("Select the index number of the todo you want to delete");
            for (let todos in todo) {
                console.log(`${todos}- ${todo[todos]}`);
            }
            let deleteIndex = parseInt(prompt("Enter the index of the todo:"));
            todo.splice(deleteIndex, 1);
        } else if (input === "3") {
            input = prompt(newToDo);
            todo.push(input);
        }
    }
}

console.log("Thank you have a great day!");
