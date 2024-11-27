require('codemirror');
require('codemirror/addon/search/searchcursor.js');
require('codemirror/addon/selection/mark-selection.js');
require('codemirror/lib/codemirror.css');
require('../src/diffinity.css');

const lhs = `\
the quick red fox
jumped over the hairy dog
`;

const rhs = `\
the quick brown fox
jumped over the lazy dog
`;


document.onreadystatechange = function () {
	if (document.readyState !== 'complete') {
		return;
	}

	const diffinity = new Diffinity('#compare', {
		license: 'lgpl',
		lhs,
		rhs
	});

	// On init, scroll to first diff
	diffinity.once('updated', () => {
		diffinity.scrollToDiff('next');
	});
};
