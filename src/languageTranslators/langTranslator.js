module.exports= 
class Translator
{
	constructor()
	{
		this.currentLanguage="en";
		this.JSONobject={};
	}
	getLanguage()
	{
		return this.currentLanguage;
	}
	setLanguage(str)
	{
		this.currentLanguage=str;
		this.loadJSON();
	}
	loadJSON()
	{
		if(this.currentLanguage=="en")
			this.JSONobject={};
		else
		{
			let filename=this.currentLanguage+".js";
			console.log("Fetching "+filename);
			var _json;
			import(/* webPackMode: "lazy" */"./langJSON/"+filename).then((module)=>{
				this.JSONobject=module.default.json;
			});
		}
	}
	parseText(text) // Case sensitive
	{
		if(this.JSONobject[text]==undefined)
			return text;
		else
			return this.JSONobject[text];
	}
}