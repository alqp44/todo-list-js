let todos = JSON.parse(localStorage.getItem('todos')) || [];

renderTodos()

    function renderTodos () {
        let todoHTML = '';

        todos.forEach(function(item, index){
            let doneClass ='';
            if (item.done === true) {
                doneClass = 'done'
            }
            else {
                doneClass = '';
            }
            todoHTML += `
            <li>
                <span class="${doneClass}">${item.name}</span>
                <div>
                    <button class="complete-button" onclick="toggleDone(${index})">완료</button>
                    <button class="edit-button" onclick="editTodo(${index})">수정</button>
                    <button class="delete-button" onclick="deleteTodo(${index})">삭제</button>
                </div>
            </li>
            `;
        });

        document.querySelector('.js-todo-list').innerHTML=todoHTML;
    }

    function addTodo() {
        const nameElem = document.querySelector('.js-todo');
        const productName = nameElem.value;
        todos.push({
            name:productName,
            done:false
        });
        nameElem.value='';

        renderTodos()
        saveTodos()

    }

    function toggleDone(index) {
        if (todos[index].done === true) {
            todos[index].done = false
        }
        else {
            todos[index].done = true
        }

        renderTodos()
        saveTodos()
    }

    function editTodo(index) {
        const newName = prompt('수정할 내용을 입력하세요')
        todos[index].name = newName
        saveTodos()
        renderTodos();
    }

    function deleteTodo(index) {
        todos.splice(index, 1)

        renderTodos()
        saveTodos()
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos))
    }