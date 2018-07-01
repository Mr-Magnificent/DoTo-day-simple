let btn = document.getElementById('btn');
let deleteElement;
let buttonDeleteIcon;


btn.onclick = function () {

    function addElement() {
        let input = document.getElementById('inp');
        let list = document.getElementById('list');
        input = input.value;

        // checks for empty string when btn is pressed
        if (input == '') {
            return;
        }

        //sets the input box to empty string after extracting it's value
        document.getElementById('inp').value = '';

        // creates a new li element
        let listItem = document.createElement('li');
        listItem.style.marginTop = '10px';

        // creates a new button element
        buttonDeleteIcon = document.createElement('button');

        // create a new checkbox element
        let checkboxMultiple = document.createElement('input');
        checkboxMultiple.setAttribute('type', 'checkbox');
        checkboxMultiple.setAttribute('name', 'sel');
        checkboxMultiple.setAttribute('onchange', 'addToDelList(this)');

        // set the onclick attrib to call deleteItem() with 'this' node
        buttonDeleteIcon.setAttribute('onclick', 'deleteItem(this)');
        buttonDeleteIcon.innerHTML = "<img src='baseline-delete-24px.svg' style='height: 16px' alt='deleteIcon'>";

        // change inner of li element and append to ul "list"
        listItem.innerHTML = `${checkboxMultiple.outerHTML}&nbsp;&nbsp;${input}&nbsp;&nbsp;${buttonDeleteIcon.outerHTML}`;
        list.appendChild(listItem);

        //updates the deleteElement variable after the addition of new li element
        // deleteElement = document.getElementsByClassName('deleteElement');
    }
    addElement();
};

function deleteItem(deleteElement) {
    // console.log (deleteElement);
    let parentNode = deleteElement.parentNode;
    parentNode.remove();
}

let delList = [];
let ind;
function addToDelList(obj) {
    let parentNode = obj.parentNode;
    ind = delList.indexOf(parentNode);
    console.log(ind);
    console.log(delList);
    if (ind == -1) {
        delList.push(parentNode);
    }
    else {
        delList.splice(ind, 1);
    }
    console.log(delList);
}

function delSelectedList() {
    for(let i = 0; i < delList.length; i++) {
        delList[i].remove();
    }
}
