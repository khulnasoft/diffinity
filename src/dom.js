
/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function getColors(el) {
	// get current diff border color from user-defined css
	const classes = ['diffinity-editor', ...el.classList];
	const text = `
<div style="display:none" class="${classes.join(' ')}">
	<div class="diffinity current start"></div>
	<div class="diffinity start end rhs a CodeMirror-linebackground"></div>
	<div class="diffinity start end lhs d CodeMirror-linebackground"></div>
	<div class="diffinity start end lhs c CodeMirror-linebackground"></div>
	<div class="diffinity ch rhs a"></div>
	<div class="diffinity ch rhs ina"></div>
	<div class="diffinity ch lhs d"></div>
	<div class="diffinity ch lhs ind"></div>
</div>
`;
	const node = htmlToElement(text);
	el.appendChild(node);
	const currentStyle = window.getComputedStyle(node.children[0]);
	const aStyle = window.getComputedStyle(node.children[1]);
	const dStyle = window.getComputedStyle(node.children[2]);
	const cStyle = window.getComputedStyle(node.children[3]);
	const achStyle = window.getComputedStyle(node.children[4]);
	const ainStyle = window.getComputedStyle(node.children[5]);
	const dchStyle = window.getComputedStyle(node.children[6]);
	const dinStyle = window.getComputedStyle(node.children[7]);

	const colors = {
		current: {
			border: currentStyle.borderTopColor
		},
		a: {
			border: aStyle.borderTopColor,
			bg: aStyle.backgroundColor,
			fg: aStyle.color,
			ch: achStyle.color,
			in: ainStyle.color
		},
		d: {
			border: dStyle.borderTopColor,
			bg: dStyle.backgroundColor,
			fg: dStyle.color,
			ch: dchStyle.color,
			in: dinStyle.color
		},
		c: {
			border: cStyle.borderTopColor,
			bg: cStyle.backgroundColor,
			fg: cStyle.color,
		}
	};
	node.remove();
	return colors;
}

function getDiffinityContainer({ clazz = '' }) {
	const classes = [ 'diffinity-editor', clazz ]
	return htmlToElement(`\
<div class="${classes.join(' ')}" style="display:flex;height:100%;position:relative;overflow:hidden;"></div>`);
}

function getMarginTemplate({ id }) {
	return htmlToElement(`\
<div class="diffinity-margin">
	<canvas id="${id}-margin" width="8px"></canvas>
</div>`);
}

function getEditorTemplate({ id }) {
	return htmlToElement(`\
<textarea id="${id}" class="diffinity-column"></textarea>`);
}

function getCenterCanvasTemplate({ id }) {
	return htmlToElement(`\
<div class="diffinity-canvas">
	<canvas id="${id}-lhs-rhs-canvas" width="28px"></canvas>
</div>`);
}

function getSplash({ notice, left, top }) {
	return htmlToElement(`\
<div class="diffinity-splash" style="left: ${left}px; top: ${top}px">
	<p>
		<span class="diffinity-icon"></span>
		This software is a Combined Work using Diffinity and is covered by the
		${notice} license. For the full license, see
		<a target="_blank" href="http://www.diffinity.com">http://www.diffinity.com/license</a>.
	</p>
</div>`);
}

module.exports = {
    htmlToElement,
    getColors,
    getDiffinityContainer,
    getMarginTemplate,
    getEditorTemplate,
    getCenterCanvasTemplate,
    getSplash
};
