const bowling = (str)=>{
	let frames = str.replace(/-/g, '0').split(' ');
	console.log(frames);
	let score = 0;
	frames.map((ele, index)=>{
		console.log(ele,index);
		if(ele.length == 2){
			let first = ele.charAt(0);
    	let second = ele.charAt(1);
    	score += first + second;
		}
	});
}
bowling('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-');