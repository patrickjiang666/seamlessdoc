const bowling = (str)=>{
	let frames = str.replace(/-/g, '0').split(' ');
	console.log(frames);
	let score = 0;
	let queue = [];
	frames.map((ele, index)=>{
		if(ele.length == 2){
			let first = ele.charAt(0);
    	let second = ele.charAt(1);
    	if(queue.length==0){
    		/*----------------------------------------*/
        if(second!='/'){
					score += parseInt(first) + parseInt(second);
				}
				else{
					queue.push('spare');
				}
				/*----------------------------------------*/
      }
	    else if(queue.length==1){
	    	/*=========================================*/
	    	if(queue[0]=='spare'){
		      score += parseInt(first) + 10;
		      queue.pop(0);
		    }
		    else if(queue[0] == 'strike'){
		    	score += parseInt(first) + parseInt(second) + 10;
      		queue.pop(0);
		    }
		    /*---repeat situation from queue.length==0*/
		    if(second!='/'){
					score += parseInt(first) + parseInt(second);
				}
				else{
					queue.push('spare');
				}
				/*----------------------------------------*/
				/*=========================================*/
	    }
	    else if(queue.length==2){ // ... 81 5/ X ...
	    	first=='X'?score += 30:score += parseInt(first) + 20
    		queue.pop(0);
    		/*==repeat situation from queue.length==1==*/
    		if(queue[0]=='spare'){
		      score += parseInt(first) + 10;
		      queue.pop(0);
		    }
		    else if(queue[0] == 'strike'){
		    	score += parseInt(first) + parseInt(second) + 10;
      		queue.pop(0);
		    }
		    /*---repeat situation from queue.length==0*/
		    if(second!='/'){
					score += parseInt(first) + parseInt(second);
				}
				else{
					queue.push('spare');
				}
				/*----------------------------------------*/
				/*=========================================*/
	    }
		}
		console.log(score,queue);
	});
}
bowling('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-');
bowling('5/ 5/ 26 X 81 5/ X 71 7/ 7/X');