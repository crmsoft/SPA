'use strict'

define(['react'], function(React){

	var obj3 = React.createClass({

		componentDidMount:function(){
			$(this.getDOMNode()).css('left', '-100%');
			$(this.getDOMNode()).animate({ left: 0 }, 250);
		},

		render:function(){
			return(
					<div className='big'>
						<div className='content-right'>
							<div className='content-self'>
								<p>
									here will be about text  bla-bla
								</p>
							</div>
						</div>
					</div>
				);
		}

	});

	return {res:<obj3 />};
});