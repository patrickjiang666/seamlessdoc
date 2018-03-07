const bowling = (str)=>{
	let frames = str.replace(/-/g, '0').split(' ');
	console.log(frames);
	let score = 0;
	let queue = [];
/*---------------------------*/
  const oneAhead = () =>{
    if(queue.length==1){
      if(queue[0]=='spare'){
        score += 20;
        queue.pop(0);
      }
      queue.push('strike');
    }
  }
  const twoAhead = (ele) =>{
    let first = ele.charAt(0);
    let second = ele.charAt(1);
    if(second!='/'){
      score += parseInt(first) + parseInt(second);
    }
    else{
      queue.push('spare');
    }
  }
  const calcPrev = (ele)=>{
    let first = ele.charAt(0);
    let second = ele.charAt(1);
    if(queue[0]=='spare'){
      score += parseInt(first) + 10;
      queue.pop(0);
    }
    else if(queue[0] == 'strike'){
      score += parseInt(first) + parseInt(second) + 10;
      queue.pop(0);
    }
  }
  const calc2Prev = (ele)=>{
    let first = ele.charAt(0);
    let second = ele.charAt(1);
    first=='X'?score += 30:score += parseInt(first) + 20
    queue.pop(0);
  }
/*---------------------------*/
	frames.map((ele, index)=>{
		if(ele=='X'){
			if(queue.length==0){
        queue.push('strike'); 
      }
      else if(queue.length==1){ // ... 81 5/ X 
      	oneAhead();
      }
      else if(queue.length==2){
        calc2Prev(ele);
        oneAhead();
      }
		}
		else if(ele.length == 2){
    	if(queue.length==0){
    		twoAhead(ele);
      }
	    else if(queue.length==1){
	    	calcPrev(ele);
        twoAhead(ele);
	    }
	    else if(queue.length==2){ // ... 81 5/ X 
	    	calc2Prev(ele);
        calcPrev(ele);
        twoAhead(ele);
	    }
		}
		console.log(score,queue);
	});
}
bowling('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-');
bowling('5/ 5/ 26 X 81 5/ X 71 7/ 7/X');