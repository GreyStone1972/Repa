	let textBlock = document.querySelectorAll('.fourth-inline-block'),
		hiddenText2 = document.querySelectorAll('.hidden2'),
		hiddenText1 = document.querySelector('.hidden1'),
		btn = document.getElementById('btn')
		btn2 = document.querySelectorAll('.btn2'),
		close2 = document.querySelectorAll('.close2'),
		close1 = document.getElementById('close1'),
		thirdBlock = document.querySelector('.third-block'),
		fourthBlock2 = document.querySelector('.fourth-block2');
		
	
	fourthBlock2.addEventListener('click', function(event){
		let target = event.target;
		if (target && target.classList.contains('btn2')){
			for (let i = 0; i < textBlock.length; i++){
				if (target == btn2[i]){
					hiddenText2[i].classList.remove('hidden2');
					hiddenText2[i].classList.add('show');
				}
			}
		} 
	});
	
	fourthBlock2.addEventListener('click', function(event){
		let target = event.target;
			for (let i = 0; i < textBlock.length; i++){
				if (target == close2[i]){
					hiddenText2[i].classList.remove('show');
					hiddenText2[i].classList.add('hidden2');
				} 
			}
	});
	
	
	btn.addEventListener('click', function(){
			hiddenText1.classList.remove('hidden1');
			hiddenText1.classList.add('show');
	});
	
	close1.addEventListener('click', function(){
			hiddenText1.classList.add('hidden1');
			hiddenText1.classList.remove('show');
	});
	

	document.addEventListener('click', (e) => {
		let withinBoundaries = e.composedPath().includes(thirdBlock);
			if(! withinBoundaries){
				hiddenText1.classList.remove('show');
				hiddenText1.classList.add('hidden1');
			}
	});
	
	document.addEventListener('click', (e) => {
		let withinBoundaries = e.composedPath().includes(fourthBlock2);
			if(! withinBoundaries){
				for (let i = 0; i < textBlock.length; i++){
					hiddenText2[i].classList.remove('show');
					hiddenText2[i].classList.add('hidden2');
				}
			}
	});
	
	document.addEventListener('keydown', function(e){
		if(e.keyCode == 27){
				hiddenText1.classList.remove('show');
				hiddenText1.classList.add('hidden1');
				for (let i = 0; i < textBlock.length; i++){
					hiddenText2[i].classList.remove('show');
					hiddenText2[i].classList.add('hidden2');
				}
			}
	});