var codeContents={
	render: function(_translator)
	{
		const element=document.createElement('div');
		element.innerHTML=global.translator.parseText("Publish Now")+" on Facebook!!";
		return element;
	},
};
export default codeContents;
/*export default global.LanguageWrapper(codeContents);
// DEMO CLASS
var test=class Test
{
	say()
	{
		var tmp="Publish Now";
		console.log(tmp);
	}
}
console.log("DEMO: "+test+" => "+global.LanguageWrapper(test));

// DEMO STRING
var test="Publish Now";
console.log("DEMO: "+test+" => "+global.LanguageWrapper(test));
*/