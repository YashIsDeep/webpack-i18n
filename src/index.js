import _ from 'lodash';
import './style.css';

// Expected to download a json object and store it
// _translator.translate(str)= json[text] 
import Translator from '../src/languageTranslators/langTranslator.js';

var _translator = new Translator();

const element = document.createElement('div');
element.innerHTML = _translator.parseText("Good morning.");
element.classList.add('hello');
document.getElementById('greeting').appendChild(element);

var isPublisherRendered=false;
var publisherRender;
const btn = document.getElementById('publisher');
btn.addEventListener('click',function(){
	import('./publisher.js').then(function(publisher){
		var selectedLanguagePreference=document.querySelector('input[name="lang"]:checked').value;
		//console.log(isPublisherRendered+" "+_translator.getLanguage()+" -> "+selectedLanguagePreference);
		if(!isPublisherRendered)// First click
		{
			if(!(_translator.getLanguage()===selectedLanguagePreference))
				_translator.setLanguage(selectedLanguagePreference);
			publisherRender=publisher.default.render(_translator);
			document.getElementById('content').appendChild(publisherRender);
			publisherRender.style.display="block";
			isPublisherRendered=true;
		}
		else if(!(_translator.getLanguage()===selectedLanguagePreference))// Language has been changed
		{
			_translator.setLanguage(selectedLanguagePreference);
			document.getElementById('content').removeChild(publisherRender);
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