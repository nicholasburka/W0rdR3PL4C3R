import optionsStorage from './options-storage.js';

async function init() {
	const options = await optionsStorage.getAll();
	const color = 'rgb(' + options.colorRed + ', ' + options.colorGreen + ',' + options.colorBlue + ')';
	const text = options.text;
	const notice = document.createElement('div');
	notice.innerHTML = text;
	document.body.append(notice);
	notice.id = 'text-notice';
	notice.style.border = '2px solid ' + color;
	notice.style.color = color;

	//from https://stackoverflow.com/questions/12823264/get-all-elements-in-the-body-tag-using-pure-javascript
	var to_replace = document.body.getElementsByTagName('*');
	const word_regexp = new RegExp(options.word,'ig'); //find the word case-insensitive

	for (var i = 0; i < to_replace.length; i ++) {
		if (to_replace[i].innerHTML.indexOf(options.word) >= 0) {
			to_replace[i].innerHTML = to_replace[i].innerHTML.replace(word_regexp, options.replacer);
		}
	}
}

init();
