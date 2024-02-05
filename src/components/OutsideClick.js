//define function signature
export function outsideClick(node) {
	// create handleclick event
	function handleClick(event) {
		// click trigger dispatch if the click is outside the body of the node
		if (node && !node.contains(event.target) && event.preventDefault) {
			node.dispatchEvent(new CustomEvent('outside-click'));
		}
	}

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
