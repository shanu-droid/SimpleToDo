var ul = document.getElementById('list');
var li;
var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

function addItem() {
    var input = document.getElementById('input')
    var item = input.value
    var textnode = document.createTextNode(item)
    if(item === ''){
        var tag = document.createElement("p");
            var text = document.createTextNode("Enter your todo");
            tag.appendChild(text);
            var element = document.getElementById("new");
            element.appendChild(tag);
            // document.querySelector('#new').style.visibility = "hidden";
            setTimeout(() => {
               tag.remove();
            },2000);
    }else{
        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create a lable
        var label = document.createElement('label')
        label.setAttribute('for','item')


        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(() => {
            li.className = 'visual'
        },2);
        input.value = ''

    }
}
function removeItem() {
   li = ul.children
   for (let index = 0; index < li.length; index++) {
       while( li[index] && li[index].children[0].checked ){
           ul.removeChild(li[index]);
       }
   }
}
