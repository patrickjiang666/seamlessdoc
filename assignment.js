const bowling = (str)=>{
	let frames = str.replace(/-/g, '0').split(' ');
	console.log(frames);
	let score = 0;
	frames.map((ele, index)=>{
		console.log(ele,index);
	});
}
bowling('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-');