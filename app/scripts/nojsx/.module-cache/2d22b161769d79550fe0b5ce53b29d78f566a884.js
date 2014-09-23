/** @jsx React.DOM */
'use strict';

	var obj4 = React.createClass({displayName: 'obj4',

		componentDidMount:function(){
			$(this.getDOMNode()).css('right', '-100%');
			$(this.getDOMNode()).animate({ right: 0 }, 250);
		},

		render:function(){
			return(
				React.DOM.div({className: "big"}, 
						React.DOM.div({className: "content-right"}, 
							React.DOM.div({className: "content-self"}, 
								React.DOM.table(null, 
									React.DOM.tr(null, 
										React.DOM.td(null, React.DOM.strong(null, "tel ")), 
										React.DOM.td(null, ":"), 
										React.DOM.td(null, "000-111-222-333 ")
									), 
									React.DOM.tr(null, 
										React.DOM.td(null, React.DOM.strong(null, "Email ")), React.DOM.td(null, ":"), React.DOM.td(null, "eaxample@com ")
									), 
									React.DOM.tr(null, 
										React.DOM.td(null, React.DOM.strong(null, "Adress ")), React.DOM.td(null, ":"), React.DOM.td(null, "000-111-222-333 ")
									)
								)
							)
						)
					)
				);
		}

	});

	var contact = obj4(null);