let btn = document.getElementById('btn');
let deleteElement;
let buttonDeleteIcon;


btn.onclick = function () {

    function addElement() {
        let input = document.getElementById('input');
        let list = document.getElementById('list');
        input = input.value;

        // checks for empty string when btn is pressed
        if (input == '') {
            return;
        }

        //sets the input box to empty string after extracting it's value
        document.getElementById('input').value = '';

        // creates a new li element
        let listItem = document.createElement('li');
        listItem.style.marginTop = '10px';

        // creates a new button element
        buttonDeleteIcon = document.createElement('button');

        // button with a class name as deleteElement
        buttonDeleteIcon.className = 'deleteElement';
        buttonDeleteIcon.setAttribute('onclick', 'deleteItem(this)');
        buttonDeleteIcon.innerHTML = "<img src='baseline-delete-24px.svg' style='height: 16px' alt='deleteIcon'>";
        listItem.innerHTML = `${input}&nbsp;&nbsp;${buttonDeleteIcon.outerHTML}`;
        list.appendChild(listItem);

        //updates the deleteElement variable after the addition of new lo element
        deleteElement = document.getElementsByClassName('deleteElement');
        // console.log(deleteElement);
    }
    addElement();
};

// deleteElement = document.getElementsByClassName('deleteElement');

// Test function that prints the parent node of the button ( i.e prints the called li element)
// This is not called when the button is clicked
function deleteItem(deleteElement) {
    console.log (deleteElement);
    function delListItem () {
        let parentNode = deleteElement.parentNode;
        parentNode.remove();
    }
    delListItem();
};