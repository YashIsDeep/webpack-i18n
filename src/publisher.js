var language="en";
export default {
	render: function()
	{
		const element=document.createElement('div');
		element.innerHTML="PUBLISH NOW Your language preference is "+language;
		// Now we can download json?
		return element;
	},
	setLanguage: function(str)
	{
		language=str;
	},
	getLanguage: function()
	{
		return language;
	},
};