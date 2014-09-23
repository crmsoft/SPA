'use strict'

define(['react'],function( React ){


	var thumb = React.createClass({
		handleShowIfo:function(e){
			var t = '<small class="hand">Click to close!</small>';
			$('.big-thumb').html($(e.target).parent().html()+t).hide('slow').show('slow');
		},

		render:function(){
			return(
				<div className='my-thumb'>
					<img className='hand' src={this.props.item.img} onClick={this.handleShowIfo}/>
					<p>
						{ this.props.item.description }
					</p>
				</div>
			);
		},
	});

	var jobColumn = React.createClass({
		render:function(){

			var col = this.props.data.map(function( item , index ){
				return ( <thumb key={index} item={item}></thumb> );
			});

			return(
					<div className='col-thumb'> 
						{col} 
					</div>
				);
		}
	});

	var obj = React.createClass({
		
		componentDidMount:function(){
			$(this.getDOMNode()).css('top', '-100%');
			$(this.getDOMNode()).animate({ top: 0 }, 250);
		},

		closeModal:function(e){
			$('.big-thumb').hide('fast');
		},

		render:function(){
			var allCols = this.props.items.map( function( item ){
				return( <jobColumn data={item} /> );
			});

			return(
					<div className='big'>
						<div className='big-thumb hidden' onClick={this.closeModal}>

						</div>
						<div className='all-jobs'>
							{allCols}
						</div>
					</div>
				);
		}
	});
	
	var items = [
						[
							{ img:'images/thumbnails/1.png', description:'The situation gets more complicated when the children are shuffled around (as in search results) or if new components are added onto the front of the list (as in streams). In these cases where the identity and state of each child must be maintained across render passes, you can uniquely identify each child by assigning it a key:' },
							{ img:'images/thumbnails/1.png', description:'description 0 1' },
							{ img:'images/thumbnails/1.png', description:'description 0 2' }
						],
					    [
							{ img:'images/thumbnails/1.png', description:'description 1 0' },
							{ img:'images/thumbnails/1.png', description:'description 1 1' },
							{ img:'images/thumbnails/1.png', description:'description 1 2' }
						],
						[
							{ img:'images/thumbnails/1.png', description:'description 2 0' },
							{ img:'images/thumbnails/1.png', description:'description 2 1' },
							{ img:'images/thumbnails/1.png', description:'some long text' }
						]
				]; 

	return {res:<obj items={items}/>};
});