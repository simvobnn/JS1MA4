

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Todos</h2>';
        data.forEach(function(todo){
            output += `
                <div class="card">
                    <ul>
                        <li>${todo.id}</li>
                        <li>${todo.title}</li>
                        <li>Completed: ${todo.completed}</li>
                    </ul>
                </div>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
.catch(error => console.log(error));

document.addEventListener('DOMContentLoaded', function(){
    var card = document.getElementsByClassName('card');
    card[0].setAttribute("style, bacground-color: red;")
});


