


const scriptsInEvents = {

	async Egame_Event1_Act1(runtime, localVars)
	{
		screen = 3;
		
	},

	async Egame_Event1_Act2(runtime, localVars)
	{
		localStorage.setItem('screen', '3');
	},

	async Egame_Event1_Act6(runtime, localVars)
	{
		localStorage.setItem('color', '#fcf99b');
	},

	async Egame_Event1_Act9(runtime, localVars)
	{
		runtime.globalVars.per2 = localStorage.getItem('screenshot2');
	},

	async Egame_Event9_Act1(runtime, localVars)
	{
		runtime.globalVars.per = localStorage.getItem('screenshot');
	},

	async Egame_Event17_Act2(runtime, localVars)
	{
		localStorage.setItem('color', runtime.globalVars.HEXcolor);
	},

	async Egame_Event19_Act2(runtime, localVars)
	{
		screen = 3;
		
	},

	async Egame_Event19_Act3(runtime, localVars)
	{
		localStorage.setItem('screen', '3');
	},

	async Egame_Event27(runtime, localVars)
	{
		runtime.globalVars.Log = localStorage.getItem('log');
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

