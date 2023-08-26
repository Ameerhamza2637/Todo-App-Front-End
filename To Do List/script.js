var titlesArray=[];
var index
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    // Extract all titles and store them in an array
    titlesArray = data.map(item => item.title);
    const resultDiv = document.getElementsByClassName('sug_text');
    for (let i = 0; i < resultDiv.length; i++) {
        index=(Math.random()*200);
        index=Math.floor(index);
        const element = resultDiv[i];
        element.innerHTML = titlesArray[index];
    }
  })
  .catch(error => console.error('Error:', error));


function display()
{
    
    var title = titlesArray[index];
    var parent = document.getElementById("display");
    var child = document.createElement("div") 
    child.innerHTML = "<p>"+title+"</p>";
    child.classList.add("card")
    child.classList.add("sug_text")
    parent.appendChild(child)
}

function display_task()
{
    // Get the input values
    var title = document.getElementById("task").value;
    var parent = document.getElementById("display");
    var child = document.createElement("div") 
    child.innerHTML = "<p>"+title+"</p>";
    child.classList.add("card")
    child.classList.add("sug_text")
    parent.appendChild(child)
}