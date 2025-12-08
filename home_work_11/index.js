//**взял за основу решение, которое разбирали на занятии**//

let toDoListArr = [];

const header = document.createElement("header");

const h1 = document.createElement("h1");
h1.textContent = "To Do List";

const toDoSection = document.createElement("section");
toDoSection.classList.add("todo-section");

const toDoAdd = document.createElement("div");
toDoAdd.classList.add("todo-section__todo-add");

const input = document.createElement("input");
input.id = "textInput";
input.classList.add("todo-section__input");
input.type = "text";
input.placeholder = "Введите текст...";
input.name = "input";

const btn = document.createElement("button");
btn.id = "addBtn";
btn.innerText = "add";

let toDoList = document.createElement("ol");

document.body.prepend(header, toDoSection);
header.prepend(h1);
toDoSection.prepend(toDoAdd);
toDoAdd.prepend(input);
toDoAdd.append(btn);
toDoSection.append(toDoList);

const addBtn = document.getElementById("addBtn");
const textInput = document.getElementById("textInput");

const createElement = (text, doneCls = "") => {
    //создает элемент li со значением text
    const toDoItem = document.createElement("li");
    toDoItem.textContent = text;
    toDoItem.className = doneCls;
    return toDoItem;
};

const updateList = (toDoItem) => {
    //обновляет наше DOM дерево
    toDoList.append(toDoItem); //добавляем элемент в список
    textInput.value = "";
};

if (localStorage.getItem("toDoList")) {
    showToDoList();
}
function showToDoList() {
    toDoListArr = JSON.parse(localStorage.getItem("toDoList"));
    // alert(toDoListArr);//!!
    for (let i = 0; i < toDoListArr.length; i++) {
        let doneCls = "";
        if (toDoListArr[i].isDid) {
            doneCls = "done";
        }
        const element = createElement(toDoListArr[i].text, doneCls); //вызываем функцию создания элемента списка
        element.id = toDoListArr[i].id;

        updateList(element);
    }
}

const handler = () => {
    const text = textInput.value.trim();
    if (text) {
        //если текстовое значение затримленное есть
        let id = `id-${Date.now()}-1`;
        toDoListArr.push({
            id: id,
            text: text,
            isDid: false,
        });
        const element = createElement(text); //вызываем функцию создания элемента списка
        element.id = id;
        updateList(element); //вызываем функцию обновления листа
    }
};

addBtn.addEventListener("click", handler); //вызывается при нажатии на кнопку

input.addEventListener("keyup", (event) => {
    //вешаем на input слушателя, который будет реагировать на нажатие Enter - а
    if (event.key === "Enter") {
        handler();
    }
});

//теперь будем использовать делегирование чтобы реализовать удаление задач, можно навесить слушателя на родителя и использовать в т.ч. на ребенке
toDoList.addEventListener("click", (event) => {
    // console.log(event);
    console.log("event.currentTarget", event.currentTarget); // <ol><li>ewf</li><li>wefewf</li><li>wef</li></ol>  т.е. отображается родитель выбранного элемента списка
    console.log("event.target", event.target); //<li>wefewf</li>  т.е. выбранный ребенок списка
    //event.target.remove(); //удаляем выбранный элемент списка из DOM дерева
    //event.target.style.color = "red";//покрасили выбранный элемент
    //   event.target.style.textDecoration = "line-through"; //зачеркнули выбранный элемент
    event.target.classList.toggle("done"); //а вот так зачеркнули через класс, причем использовали toggle т.е. если нет класса то добавили а если есть то убрали
    // alert(event.target.id);//!!
    if (
        toDoListArr.find((toDoEl) => toDoEl.id === event.target.id)
            .isDid
    ) {
        toDoListArr.find(
            (toDoEl) => toDoEl.id === event.target.id,
        ).isDid = false;
    } else {
        toDoListArr.find(
            (toDoEl) => toDoEl.id === event.target.id,
        ).isDid = true;
    }
});

window.addEventListener("unload", function () {
    // Сохраним данные в localStorage, отправить аналитику (если успеет)
    // localStorage.setItem("toDoList", JSON.stringify(toDoListArr));
    // localStorage.setItem("toDoList2", "ytj");
});

window.addEventListener("beforeunload", function (event) {
    // Можно вернуть строку с сообщением, но современные браузеры игнорируют текст
    // и показывают стандартное сообщение, чтобы предотвратить фишинг.
    // Показывается диалог "Вы уверены, что хотите покинуть страницу?"

    event.preventDefault(); // Необходимо для большинства браузеров
    localStorage.clear();

    localStorage.setItem("toDoList", JSON.stringify(toDoListArr));
});
