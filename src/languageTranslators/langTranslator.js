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
			var context=this;
			var _json;
			const module=import(/* webPackMode: "lazy" */"./langJSON/"+filename);
			module.then(()=>{
				this.JSONobject=module.default.json;
			});
			console.log(module);
			context.JSONobject=_json;
			console.log(context.JSONobject);
		}
	}
	parseText(text) // Case sensitive
	{
		console.log(text,this.JSONobject);
		if(this.JSONobject[text]==undefined)
			return text;
		else
			return this.JSONobject[text];
	}
}