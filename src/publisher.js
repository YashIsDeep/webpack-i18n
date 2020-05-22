var codeContents={
	render: function(_translator)
	{
		const element=document.createElement('div');
		element.innerHTML="Publish Now";
		return element;
	},
};

function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
    	if(mapObj[matched]==undefined)return matched;
        else return mapObj[matched];
    });
}

var dictionary=global.translator.JSONobject;
for(var key in codeContents)
{
	var value=codeContents[key];
	if(value instanceof Function)
	{
		var modified=replaceAll(value.toString(),dictionary);
		var func = new Function("return " + modified)();
		codeContents[key]=func;
	}
}

export default codeContents;