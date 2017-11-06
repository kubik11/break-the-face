(function (){
	var faces, contious, trials, viewHeight;
	contious = false;
	trials = 3;
	viewHeight = $('.game-field-inner').innerHeight();
	faces = ['grois', 'jac', 'parash'];
	var view = {
		button: $('.button'),
		face: $('.game-item'),
		heart: $('.trial .fa'),
		trial: $('.trial'),
		caption: $('.caption'),
		field: $('.game-field-inner'),

		changeButton: function(){
			if(!contious){
				this.button.html('Reset game');
				this.caption.addClass('active-caption');
			}else{
				location.reload();
			}
		},
		updateTrials: function(){
			this.trial.html('');
			for(var i = 0; i < trials; i++){
				this.trial.append('<i class="fa fa-heart" aria-hidden="true"></i>');
			}
		},
		showAx: function(){
			this.field.css('cursor', 'url(../img/ax.png)');
		}
	}
	$(document).ready(function(){

		// 1 .Define event handler
		$('.button').click(init);
		// 2. Define init function
		function init(){
			view.showAx();
			view.changeButton(); // changed button 
			contious = true; // changed contious of game
			goDown();// begining of declining
			
		}
		function face(){
			view.face.attr({
				src: 'img/'+faces[Math.floor(Math.random()*3)]+'.png'
			});
			view.face.css('left',  Math.floor(Math.random()*600) + 'px');
			view.face.css('top',  '-250px');
		}
		function goDown(){
			face();// define a face
			view.updateTrials(); //update count of hearts
			if(trials > 0){
				var timer = setInterval(function(){
					var position;
					position = parseInt(view.face.css('top'));
					
					if(position < viewHeight){
						view.face.css('top', position + 10 + 'px');
					}else{
						console.log('its too low');
						trials--;
						clearInterval(timer);
						alert(trials);
						setTimeout(goDown, 400);
					}
				}, Math.floor(Math.random()*10)*10);
			}
		}	
			// 3. Check condition if the game has started
				// 4.1 if 'yes' => reload the page
				// 4.2 if 'not' => update viewport (change the button('reset game'), show thial box)
				// 4.3 Create random face 'by Math.random() need choose requried index of array which contain groupe 
				// of face's, after that define random position of it element
				// 5. Move element down to one step
					// 5.1 Condition if element is too low 
						// 5.2 Examine if the trials is left
							// 5.3 if something left => remove one point and return to step (5)
							// 5.4 if not => show game over massage and change button to 'Start game'
		
		
		// 6. Hang event handler('mouseover') on the element 
			// 6.1 if mouse is over an element => increse one point to score, stop exeution move element function 

		//////////////////////////////////////////
		// REQUIRED
		// 1. different position of each element
		// 2. different speed of declining
		// 3. when game is over, show the massage of current score




	});	
})()