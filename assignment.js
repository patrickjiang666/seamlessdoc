const bowling = (str)=>{
	let frames = str.replace(/-/g, '0').split(' ');
	console.log(frames);
	let score = 0;
	let queue = [];
	frames.map((ele, index)=>{
		console.log(ele,index);
		if(ele.length == 2){
			let first = ele.charAt(0);
    	let second = ele.charAt(1);
    	if(second!='/'){
				score += parseInt(first) + parseInt(second);
			}
			else{
				queue.push('spare');
			}
		}
	});
}
bowling('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-');
bowling('5/ 5/ 26 X 81 5/ X 71 7/ 7/X');