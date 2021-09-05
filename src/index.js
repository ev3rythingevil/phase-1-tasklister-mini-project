document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('We loaded up and ready to go baby')
});

// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

const submitTask = document.getElementById('create-task-form') 
const taskList = document.getElementById('tasks')

//console.log(textInput)
//console.log(submitTask)
//console.log(taskList)
submitTask.addEventListener('submit',() => {
  const newText = document.createElement('li')
  const textInput = document.getElementById('new-task-description').value 
  
  newText.textContent = textInput
  taskList.append(newText)
  event.preventDefault()
})

// ok so I'm creating the li element but nothing is going inside it. Must find out why
