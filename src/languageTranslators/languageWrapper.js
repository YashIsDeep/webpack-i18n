var dictionary;
function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
    	if(mapObj[matched]==undefined)return matched;
        else return mapObj[matched];
    });
}

function modifyFunction(inFunction)
{
	var modified=replaceAll(inFunction.toString(),dictionary);
	var outFunction = new Function("return " + modified)();
	return outFunction;
}
function modifyString(input)
{
	return replaceAll(input,dictionary);
}
function modifyDictionary(dict)
{
	for(var key in dict)
	{
		var value=dict[key];
		dict[key]=modify(value);
	}
	return dict;
}
function modifyUnknown(object)
{
	var str = JSON.stringify(object);
	modifyString(str);
	var obj = JSON.parse(str);
	return obj;
}
function modify(unknownVariable)
{
	if(unknownVariable instanceof Function || typeof unknownVariable === 'function')
		return modifyFunction(unknownVariable);
	else if(unknownVariable instanceof String || typeof unknownVariable === 'string')
		return modifyString(unknownVariable);
	else if(unknownVariable.constructor == Object)// If dictionary
		return modifyDictionary(unknownVariable);
	else
		return modifyUnknown(unknownVariable);
}

module.exports=
function(codeContents)
{
	dictionary=global.translator.JSONobject;
	return modify(codeContents);
}