const bowling = (str)=>{
	let frames = str.replace(/-/g, '0').split(' ');
	console.log(frames);
}
bowling('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-');