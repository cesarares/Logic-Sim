function LogicSimApp()
{
	this.__proto__ = new LogicSim();


	this.initialize = function(canvas)
	{
		this.setCanvas(canvas);
		
		this.setGridSize(16);
		this.onResizeCanvas();

		Saving.load("N4IglgxgziBcDaBdANCATgewwFzqA5gIbYCmMCousIA8gK7YAODAImFIwDaECeIqADzgAOAIwA2VH1gBOSSAxwkqACZwAdnU6cAvskpxaDZtjYdufQSIlS4ogCz3UihChBrYm7XoPV6TVnYuXn4QIVgxeWlRGQAmZyU3Dy9dfRAqIwDTIItQ8MjbWFj7AAYE11UNLVTfTJMzYMsw6yi4WOFhcuV3Ku80jP96nJCrCJsQaQBmSfkXbuTqn3TDQcDzEeax1thJ4ScFRMrPRf6V4zXGvJbC+0n4g4qe477agGEMdShsAEl1EyudrEyhM4PZxnMAGaEThQEhJOBQmEkJYZd6fH5/BgAu7AqZArqI2Hw2CE5Gnahor6/f6jHGFIGdB7wUnE0kowwAORwAHFiCQAWDtgyutg0HQ4UcUuzqABBdQqXmkAEAdnxINgMXukOhRMlJ1qcoVfJVaukchFYolTyl5JAhsV/NGqtxdkcBJ1VoWL2WsvlDpNLqKpXdSOJNoNfuNo3EwfVsVVFvFYf1PrtkaV0dj0mEwLmoqTeu9GXtUc2McDomVsyULMLNVTJYzZazcBmjO1obr0pAXOw/tGgsKdKZ+c9vXrxfTjubgeHHd11pTk6NTfC5cKonaIYXXonhkb07XLdgg6ZtcXRf3U4B67jxW3Y+ee99K8PcGdQ72D+Tl5f/c2H7qtM1YIOeu7dgeAb0h035drakFOqaoJ3LBF7Pj2PKluEp7SKeeaWj+uhuAA7mAaBkEooBQOEyolPsUDRHRqAkDRaokIx9hLNR75MSADFwOaIAsTx+zsXYdFcTRvH8RqACs9zCbAgFiXJsSSSJqAyQ4olSaJ0TyepSnSdIQLAopykmSUJSGbR9HRHEzG6cxlnWWk3FGXZbT2Iy5lsSZ3k2cZXlmU5Qn+cIgWeUUgm+WZJlyJFmkmTBQmhSpsQJW5oUyZMbqpe+fmto4iV8VMMyORpYVFZxWWVTlDn5UphU7HEJU5V+jW2c5ratbVHlJaCsaxd1J6lG1uEoZ1vEqY4rlUTRHVaZuFVbCNoibjZi3ROIIXXFVGo7ZtUXCo1BT7QyR0DUUsnyIpZ3pTdl2la2035OMKmTBJfXKltrbySt91TAZ32/SeVkA+9uFWU9MmOD5b23bhAV9d5wIyRlt3YTmI3AYZskNTleWKbeH3FX1+P3Fpr1wCTHF4wT+kKUecV2MD82gtjz3RZjcAUyNGP05THErXz+2iGzfHhKLWn/Y1ovpZl7OwNL8U87AtNtIrku8wzmtq/LUxk0rslVldkwNcTQ1TL1xum1zs0rRro1zdryt2+j4ONU7pmGae6PeSLdvpcjtvyB7u1u4jXkRX1uxRcBK2nh9My++M/vw6CkOtin5Pu9bTO80HSMu+5Jth+FjtW9HeN59HgdRy1ako5z6P3nLsvpcUeOy+jnOWyzRQ5t3Qt2B1/drXsw9XSl4/7R0U9c5MQfMzjVYLzJM9Sx30ST+TPcmW3imydvbRD3vI+DxHx8KVMa/n1dohj1vN9tF3KNp9E5WNUnB81UrcdXViIfbCWcihvyVn7T++sv4qVEDnY2X90aTVnulO4eNEF4gzurKugIY4IPLqCYBNMcH2HAa7WSGC7AwKljAkyaDyaUI1NQ4hA84HiHQQQooyCaENzuHg8hjC+Ei1oYQv+rtUZXVuAXZWy19pSMMjtRkWk2KsVYUCBRJQlHbSwRZOw4h+HuUUYA96qj+YSDxrI9GMYRayJmvQpWRiuabgjo42B+iLEX1iNYr2mj+Yxg0VovRWDXEmXMX1Rx6MTE018edfx4SYlWJ0gVAeXixHuUgchaRP9QSPXiYEnYO0Vq6IKSXNcCSpi2NMftSYG08mSJicNORmiAlm0qdEnyUxDrv04fYG6jsGm4Vyf/UGUjE6gPkXUxehSfEdNBM0yZsMGllNmSeIZrsImDLVsU3p7DEA6B0EAA");
		
		this.setReadOnly(true);
	}
		
}

logicSim = new LogicSimApp();

window.onload = function(e)
{
	var canvas = document.getElementById("canvas");
	if (!images.allImagesLoaded()) {
		images.onAllLoaded = function()
		{
			logicSim.initialize(canvas);
			logicSim.run();
		}
	} else {
		logicSim.initialize(canvas);
		logicSim.run();
	}
}
