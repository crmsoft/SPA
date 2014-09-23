'use strict'

define(['react'], function(React){

	var obj4 = React.createClass({

		componentDidMount:function(){
			$(this.getDOMNode()).css('right', '-100%');
			$(this.getDOMNode()).animate({ right: 0 }, 250);
		},

		render:function(){
			return(
				<div className='big'>
						<div className='content-right'>
							<div className='content-self'>
								<table>
									<tr>
										<td><strong>tel </strong></td>
										<td>:</td>
										<td>000-111-222-333 </td>
									</tr>
									<tr>
										<td><strong>Email </strong></td><td>:</td><td>eaxample@com </td>
									</tr>
									<tr>
										<td><strong>Adress </strong></td><td>:</td><td>000-111-222-333 </td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				);
		}

	});

	return {res:<obj4 />};
});