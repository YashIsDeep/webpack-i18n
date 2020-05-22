var codeContents={
	render: function(_translator)
	{
		const element=document.createElement('div');
		element.innerHTML="Publish Now";
		return element;
	},
};


var dictionary=global.translator.JSONobject;
for(var key in codeContents)
{
	var value=codeContents[key];
	if(value instanceof Function)
	{
		var modified=value.toString();
		for (var pattern in dictionary)
			modified=modified.replace(pattern,dictionary[pattern]);
		var func = new Function("return " + modified)();
		codeContents[key]=func;
	}
}

export default codeContents;