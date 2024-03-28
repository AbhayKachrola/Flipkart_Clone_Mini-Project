
import * as actionTypes from '../constants/wishlistConstants';
import axios from 'axios';

export const addTowishlist = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_WISHLIST, payload: { ...data, quantity } });

    } catch (error) {
        console.log('Error while calling wishlist API');
    }
};

export const removeFromwishlist = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_WISHLIST,
        payload: id
    })

};