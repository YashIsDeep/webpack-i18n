import _ from 'lodash';
import './style.css';
import _LanguageWrapper from './languageTranslators/languageWrapper.js';

// Expected to download a json object and store it
// _translator.translate(str)= json[text] 
import Translator from '../src/languageTranslators/langTranslator.js';

var _translator = new Translator();
global.translator=_translator;
global.LanguageWrapper=_LanguageWrapper;

window.addEventListener('onload',event=>{console.log(event);});

const btn1 = document.getElementById('setter');
btn1.addEventListener('click',function(){
	var selectedLanguagePreference=document.querySelector('input[name="lang"]:checked').value;
	_translator.setLanguage(selectedLanguagePreference);
	if(isPublisherRendered)
	{
		isPublisherRendered=false;
		document.getElementById('content').removeChild(publisherRender);
	}
});

var isPublisherRendered=false;
var publisherRender;
const btn2 = document.getElementById('publisher');
btn2.addEventListener('click',function(){
	import('./publisher.js').then(function(publisher){
		if(!isPublisherRendered)// First click
		{
			publisherRender=publisher.default.render(_translator);
			document.getElementById('content').appendChild(publisherRender);
			publisherRender.style.display="block";
			isPublisherRendered=true;
		}
		else // Toggle display
		{
			if(publisherRender.style.display==="block")
				publisherRender.style.display="none"
			else
				publisherRender.style.display="block";
		}
	});
});