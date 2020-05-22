var codeContents={
	render: function(_translator)
	{
		const element=document.createElement('div');
		element.innerHTML="Publish Now";
		return element;
	},
};

import LanguageWrapper from './languageTranslators/languageWrapper.js';
codeContents=LanguageWrapper(codeContents);
export default codeContents;