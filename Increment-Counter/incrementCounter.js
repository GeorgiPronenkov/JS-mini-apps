/**
Your function will receive a string value representing a selector (for example "#wrapper" or ".root"),
 all elements created should be appended to the selector.
The HTML you create should contain 4 elements:
    • <textarea> with class="counter", value="0" and the disabled attribute.
    • <button> with class="btn", id="incrementBtn" and text "Increment".
    • <button> with class="btn", id="addBtn" and text "Add".
    • Unordered list <ul> with class="results".
When the [Increment] is clicked the value of the textarea should go up by one (if it was 0 it should become 1 e.t.c.).
 When the [Add] is clicked a new list item (<li>) with text equal to the current value of the textarea should be added to the
 unordered list.

 The next step is to add values, and attributes to the elements and events to the buttons:
 The last step is to add our elements to the DOM:
*/

function increment(selector) {

	//get the selector as html element because it is a a string now
	let parent = $(`${selector}`);

	//creating elements
	(function createElements() {

		let textarea = $(`<textarea>`);
		textarea.addClass('counter');
		textarea.val(0);
		textarea.attr('disabled', true);

		let incrementBtn = $('<button>');
		incrementBtn.addClass('btn');
		incrementBtn.attr('id', 'incrementBtn');
		incrementBtn.text('Increment');

		incrementBtn.on('click', function () {
			let currentValue = +$('.counter').val();
			textarea.val(currentValue + 1);
		});

		let addBtn = $('<button>');
		addBtn.addClass('btn');
		addBtn.attr('id', 'addBtn');
		addBtn.text('Add');

		addBtn.on('click', function () {

			let li = $('<li>');
			li.text($('.counter').val());
			$('.results').append(li); //взема ul с class=results И добавя тек.li
		});

		let ul = $('<ul>');
		ul.addClass('results');

		appendElements([textarea, incrementBtn, addBtn, ul]);
	})(); //самоизвикв.се ф-я

	//append to parent
	function appendElements(elements) {

		elements.forEach((element) => {
			parent.append(element);
		})
	}
}
