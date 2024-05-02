Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'starforged-ru',
			lang: 'ru',
			dir: 'compendium'
		}); 
  } // END if(typeof Babele  
});
