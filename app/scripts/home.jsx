'use strict'

define(['react'],function(React){

	var obj = React.createClass({

		componentDidMount:function(){

			this.currSlide = 1;
			$(this.getDOMNode()).css('top', '100%');
			$(this.getDOMNode()).animate({ top: 0 }, 250);

			this.sliderTimer = setInterval(this.slideContent, 4000);
		},

		slideContent:function(){
			var ln = $('.big img').length;
			$('.big').find('img').each(function(){
				$(this).hide('slow');
			});

				if(++this.currSlide > ln)
					this.currSlide = 1;

			$('.big img:nth-child('+this.currSlide+')').show('slow');
		},

		componentWillUnmount:function(){
			// clear to reset later
			clearInterval( this.sliderTimer );
		},

		render:function(){
			return(
					<div className='big'>
				      <img src='../images/slides/slide1.jpg' />
				      <img src='../images/slides/slide2.jpg' />
				    </div>
				)
		}
	});

	return {res:<obj />};

});