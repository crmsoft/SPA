'use strict'; // use save mode

define([	
			'react',
			'jquery',
			'jsx!home', 
			'jsx!job', 
			'jsx!about', 
			'jsx!contact'
		], 
		
function(React,$,home,job,about,contact){
	
	var menuItem = React.createClass({

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
					<li key={this.props.item.href} onClick={this.handleMenuItemClick}><a href={this.props.item.href}>{this.props.item.link}</a></li>
				);
		}
	});

	var myMenu = React.createClass({
		render:function(){
			var items = [];
			this.props.data.forEach(function(currItem, index){
				items.push( <menuItem key={index} item={currItem} /> );
			}.bind(this));
			return(
					<nav>
						<ul>
							{items}
						</ul>
					</nav>
				);
		}
	});

	var navigate = [
						  {	href: '/#home', 		link: 'Home'     	},
						  {	href: '/#profolio', 	link: 'Profolio'  	},
						  {	href: '/#about', 		link: 'About'  	  	},
						  {	href: '/#contact',   	link: 'Contact'     }
						];

	React.renderComponent( <myMenu data={navigate} />, document.getElementById('nav-container') );

});