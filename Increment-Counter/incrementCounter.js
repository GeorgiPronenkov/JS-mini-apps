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
