var newWord = document.getElementById("word-new");
var list = document.getElementById("word-list");
var count = document.getElementById("word-count");

function updateCount(){
	if (list.children.length > 1) count.innerHTML = list.children.length + ' words'
	else if (list.children.length == 0) count.innerHTML = 'hit enter to add word'
	else count.innerHTML = list.children.length + ' word'
}

list.addEventListener("click", function(event) {
    if (event.target !== event.currentTarget) {
        if (event.target.className == "destroy")
		{
			event.target.parentElement.parentNode.removeChild(event.target.parentElement);
			updateCount();
		}
    }
    event.stopPropagation();
});

newWord.addEventListener("keypress", function(event) {
    if (event.keyCode == 13 && newWord.value.trim() !== '')
	{
		var entry = document.createElement('li');
		entry.innerHTML = '<label>' + newWord.value + '</label><button class="destroy"></button>';
		list.insertBefore(entry, list.childNodes[0]);
		newWord.value = '';
		updateCount();
	}
});