require('codemirror/addon/selection/mark-selection.js');
require('codemirror/lib/codemirror.css');
require('../src/diffinity.css');




document.onreadystatechange = function () {
	if (document.readyState !== 'complete') {
		return;
	}

	new Diffinity('#diffinity0', {
		license: 'lgpl-separate-notice',
		lhs: (setValue) => setValue('the quick brown fox\njumped over the lazy dog\n'),
		rhs: (setValue) => setValue('\nthe quick red fox\njumped over the hairy dog\n')
	});
	new Diffinity('#diffinity1', {
		license: 'lgpl-separate-notice',
		lhs: (setValue) => setValue('\nthe quick red fox\njumped over the hairy dog\n'),
		rhs: (setValue) => setValue('the quick brown fox\njumped over the lazy dog\n')
	});

	new Diffinity('#diffinity2', {
		license: 'lgpl-separate-notice',
		lhs: (setValue) => setValue('\nthe quick red fox\njumped over the hairy dog\n\n'),
		rhs: (setValue) => setValue('\n\nthe quick brown fox\njumped over the lazy dog\n')
	});
	new Diffinity('#diffinity3', {
		license: 'lgpl-separate-notice',
		lhs: (setValue) => setValue('\nthe quick brown fox\njumped over the lazy dog\n\n'),
		rhs: (setValue) => setValue('\n\nthe quick red fox\njumped over the hairy dog\n')
	});

	new Diffinity('#diffinity4', {
		license: 'lgpl-separate-notice',
		lhs: (setValue) => setValue('the quick brown fox\n'),
	});
	new Diffinity('#diffinity5', {
		license: 'lgpl-separate-notice',
		rhs: (setValue) => setValue('the quick brown fox\n')
	});

	new Diffinity('#diffinity6', {
		license: 'lgpl-separate-notice',
		lhs: (setValue) => setValue('the quick brown fox\njumped over the lazy dog\n'),
	});
	new Diffinity('#diffinity7', {
		license: 'lgpl-separate-notice',
		rhs: (setValue) => setValue('the quick brown fox\njumped over the lazy dog\n')
	});

	new Diffinity('#diffinity8', {
		license: 'lgpl-separate-notice',
		lhs: (setValue) => setValue('the quick brown fox\njumped over the lazy dog'),
		rhs: (setValue) => setValue('the quick brown fox\njumped over the lazy dog\n\nand the fence')
	});
	new Diffinity('#diffinity9', {
		license: 'lgpl-separate-notice',
		lhs: (setValue) => setValue('the quick brown fox\njumped over the lazy dog\n\nand the fence'),
		rhs: (setValue) => setValue('the quick brown fox\njumped over the lazy dog')
	});

	new Diffinity('#diffinity10', {
		license: 'lgpl-separate-notice',
	});
	new Diffinity('#diffinity11', {
		license: 'lgpl-separate-notice',
		lhs: (setValue) => setValue('the quick brown fox\njumped over the lazy dog'),
		rhs: (setValue) => setValue('the quick brown fox\njumped over the lazy dog')
	});

	new Diffinity('#diffinity12', {
		license: 'lgpl-separate-notice',
		lhs: (setValue) => setValue('the quick red fox\njumped over the hairy dog'),
		rhs: (setValue) => setValue('the quick brown fox\njumped over the lazy dog')
	});
	new Diffinity('#diffinity13', {
		license: 'lgpl-separate-notice',
		lhs: (setValue) => setValue('\nthe quick red fox\njumped over the hairy dog'),
		rhs: (setValue) => setValue('\nthe quick brown fox\njumped over the lazy dog')
	});

	new Diffinity('#diffinity14', {
		license: 'lgpl-separate-notice',
		ignorecase: true,
		ignorews: true,
		ignoreaccents: true,
		lhs: (setValue) => setValue('ignore ws\n\nignore CASE\n\nignore áccents\n'),
		rhs: (setValue) => setValue('ignore\tws\n\nignore case\n\nignore accents\n')
	});
};
