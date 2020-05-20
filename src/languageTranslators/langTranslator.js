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
			this.JSONobject=this.fetchJSONObjectFromServer(this.currentLanguage+".json");
	}
	fetchJSONObjectFromServer(filename)
	{
		var language={
			"en.json":{},
			"hi.json":{"Publish Now":"Abhi publish kariye"},
		};
		if(language[filename]==undefined)
		{
			console.log("Unsupported language: "+filename);
			return {};
		}
		return language[filename];
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