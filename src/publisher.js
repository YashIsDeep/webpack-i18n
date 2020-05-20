export default {
	render: function(_translator)
	{
		const element=document.createElement('div');
		element.innerHTML=_translator.parseText("Publish Now");
		return element;
	},
};