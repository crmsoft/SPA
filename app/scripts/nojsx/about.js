/** @jsx React.DOM */
'use strict';

	var obj3 = React.createClass({displayName: 'obj3',

		componentDidMount:function(){
			$(this.getDOMNode()).css('left', '-100%');
			$(this.getDOMNode()).animate({ left: 0 }, 250);
		},

		render:function(){
			return(
					React.DOM.div({className: "big"}, 
						React.DOM.div({className: "content-right"}, 
							React.DOM.div({className: "content-self"}, 
								React.DOM.p(null, 
									"here will be about text  bla-bla"
								)
							)
						)
					)
				);
		}

	});

	var about  = obj3(null);