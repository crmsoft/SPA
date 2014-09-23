/** @jsx React.DOM */
'use strict'; // use save mode
	
	var menuItem = React.createClass({displayName: 'menuItem',

		handleMenuItemClick:function( e ){  e.preventDefault();

			var link = e.target.innerHTML;

			this.goToPage( link );
		},

		setSelected:function(cr){
			$('#nav-container').find('a').each(function(r){
				if( cr.toLowerCase() === $( this ).text().toLowerCase() ){
					$( this ).addClass('activemenuitem');
				}else{
				  	$( this ).removeClass('activemenuitem');
				}
			});
		},

		goToPage:function(link){
			var component;
			
			switch( link.toLowerCase() ){
						case 'home'		: component = home;       	break;
						case 'profolio'	: component = job;        	break;
						case 'about'	: component = about;    	break;
						case 'contact'	: component = contact;	 	break;
						default : component = home; link='Home';   
					}

			this.setSelected(link);

			if(component){
					//React.unmountComponentAtNode( document.getElementById('page-content') );
					React.renderComponent( component.res, document.getElementById('page-content') );
					history.pushState({foo: 'bar'}, link, '/#' + link.toLowerCase() );
				}
		},

		componentDidMount: function(){
			
			this.goToPage( window.location.href.split('#').pop() );

			$('#nav-container').animate({
								"margin-left": "+=9px"
							}, 50);
		},

		render:function(){
			return(
					React.DOM.li({key: this.props.item.href, onClick: this.handleMenuItemClick}, React.DOM.a({href: this.props.item.href}, this.props.item.link))
				);
		}
	});

	var myMenu = React.createClass({displayName: 'myMenu',
		render:function(){
			var items = [];
			this.props.data.forEach(function(currItem, index){
				items.push( menuItem({key: index, item: currItem}) );
			}.bind(this));
			return(
					React.DOM.nav(null, 
						React.DOM.ul(null, 
							items
						)
					)
				);
		}
	});

	var navigate = [
						  {	href: '/#home', 		link: 'Home'     	},
						  {	href: '/#profolio', 	link: 'Profolio'  	},
						  {	href: '/#about', 		link: 'About'  	  	},
						  {	href: '/#contact',   	link: 'Contact'     }
						];

	React.renderComponent( myMenu({data: navigate}), document.getElementById('nav-container') );