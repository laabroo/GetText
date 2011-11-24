//Simple aplikasi blaast gettext
var InputBox = require('ui').InputBox;
var TextView = require('ui').TextView;

var app = this;

exports[':keypress'] = function(key) {
	this.input.emit('keypress', key);
	this.output.label('Tuliskan Sesuatu!');

};

exports[':load'] = function() {
	var view = this;
	view.input = new InputBox({
		style: {
			'background-color': "#aaaaee",
			width: 'fill-parent',
			height: 20
		}
	});

	view.add(view.input);

	view.output = new TextView({
		style: {
			width: 'fill-parent',
			align: 'center'
		},
		label: 'Tekan enter untuk memulai!!'
	});

	view.add(view.output);

	view.input.on('submit', function() {
		var kata = view.input.value();

		//Validasi input
		if (view.input.value() === '') {
			view.output.label('anda tidak mengetikan sesuatu.');
			view.input.value('');
		} else {
			view.input.value('');
			view.output.label(kata + ' - Tekan enter sekali lagi.');

		}

	});
};