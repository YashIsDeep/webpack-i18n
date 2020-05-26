import _ from 'lodash';
import './style.css';

// Expected to download a json object and store it
// _translator.translate(str)= json[text] 
import i18next from 'i18next';

i18next
  .use(i18nextXHRBackend)
  .init({
  	lng: 'en',
    fallbackLng: 'en',
    debug: true,
    ns: ['common','special'],
    defaultNS: 'special',
    backend: {
      // load from i18next-gitbook repo
      loadPath: 'https://raw.githubusercontent.com/i18next/i18next-gitbook/master/locales/{{lng}}/{{ns}}.json',
      crossDomain: true
    }
  }, function(err, t){});
global.i18next=i18next;

const btn1 = document.getElementById('setter');
btn1.addEventListener('click',function(){
	var selectedLanguagePreference=document.querySelector('input[name="lang"]:checked').value;
	i18next.changeLanguage(selectedLanguagePreference);
	console.log("New language "+selectedLanguagePreference);
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
			publisherRender=publisher.default.render();
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