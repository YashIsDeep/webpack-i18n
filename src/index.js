import _ from 'lodash';
import './style.css';

var languagePreference;

const element = document.createElement('div');
element.innerHTML = "Good morning.";
element.classList.add('hello');
document.getElementById('greeting').appendChild(element);

var isPublisherRendered=false;
var publisherRender;
const btn = document.getElementById('publisher');
btn.addEventListener('click',function(){
	import('./publisher.js').then(function(publisher){
		languagePreference=document.querySelector('input[name="lang"]:checked').value;
		console.log(isPublisherRendered+" "+publisher.default.getLanguage()+" -> "+languagePreference);
		if(!isPublisherRendered)// First click
		{
			publisherRender=publisher.default.render();
			document.getElementById('content').appendChild(publisherRender);
			publisherRender.style.display="block";
			isPublisherRendered=true;
		}
		else if(!(publisher.default.getLanguage()===languagePreference))// Language has been changed
		{
			publisher.default.setLanguage(languagePreference);
			document.getElementById('content').removeChild(publisherRender);
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