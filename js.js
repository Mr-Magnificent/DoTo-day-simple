let btn = document.getElementById('btn');

btn.onclick = function () {

    function addElement() {
        let input = document.getElementById('input');
        let list = document.getElementById('list');
        input = input.value;
        if (input == '') {
            return;
        }
        document.getElementById('input').value = '';
        console.log (input);
        let listItem = document.createElement('li');
        listItem.style.marginTop = '10px';
        let buttonDeleteIcon = document.createElement('button');
        buttonDeleteIcon.className = 'deleteElement';
        buttonDeleteIcon.innerHTML = "<img src='baseline-delete-24px.svg' style='height: 16px' alt='deleteIcon'>";
        // listItem.appendChild(imgDelIcon);
        listItem.innerHTML = `${input}&nbsp;&nbsp;${buttonDeleteIcon.outerHTML}`;
        list.appendChild(listItem);
    }
    addElement();
};

