import React, { Component } from 'react'
// import Counter from '../components/Counter'
import { connect } from 'react-redux'
import { fetchRestaurants, restaurantLikes } from '../redux/actions/restaurantsActions'
import '../App.css'


	class RestaurantsContainer extends Component {


	  componentDidMount() {
	    this.props.fetchRestaurants();
	  }


	  handleLikes = (e, restaurant) => {
	    e.preventDefault()
	    console.log(restaurant)
	    this.props.restaurantLikes(restaurant)
	  }




	  render() {
	    if (this.props.restaurants.length === 0) {
	      return <h1>Loading...</h1>
	    }


	    return(
	      <div className='list-style'>
	        <ul className='list-style-list'>
	          {this.props.restaurants.map(restaurant => (
	            <li key={restaurant.r_name}>
	              {restaurant.r_name} <input type="button" value="Likes" onClick={e => this.handleLikes(e, restaurant)} /> {restaurant.likes ? restaurant.likes : 0}
	            </li>
	          ))}
	        </ul>
	     </div>
	    )
	  }
	}






	  const mapStateToProps = state => {
	    return{
	      restaurants: state.restaurants.restaurants
	    }
	  }


	export default connect(mapStateToProps,{ fetchRestaurants, restaurantLikes })(RestaurantsContainer)
