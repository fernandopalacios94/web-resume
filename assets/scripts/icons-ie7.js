/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ic-film': '&#xe904;',
		'ic-leaders': '&#xe905;',
		'ic-music': '&#xe906;',
		'ic-facebook': '&#xea91;',
		'ic-instagram': '&#xea92;',
		'ic-twitter': '&#xea96;',
		'ic-github': '&#xeab0;',
		'ic-apple': '&#xeabe;',
		'ic-android': '&#xeac0;',
		'ic-windows': '&#xeac2;',
		'ic-cross': '&#xe900;',
		'ic-mail': '&#xe901;',
		'ic-bars': '&#xe902;',
		'ic-phone': '&#xe903;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ic-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
