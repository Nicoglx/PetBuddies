import { GET_OWNER_FAVORITES, GET_OWNER, OwnerActionsTypes, GET_OWNER_FAV_HOTELS  } from './types'
import axios from 'axios'

type DispatchType = (arg0: OwnerActionsTypes) => OwnerActionsTypes;



export const getUserFavorites = (id:string):any => async (dispatch:DispatchType) => {
    const {data: {favorites}} = await axios.get(`/owners/${id}/favorites`)
    return dispatch({ type: GET_OWNER_FAVORITES, payload: favorites })
}

export const getOwnerFavHotels = (id: string): any => async (
  dispatch: DispatchType
) => {
  const { data: {ownerFavHotels} } = await axios.get(`/hotels/${id}/favorites`);
  return dispatch({ type: GET_OWNER_FAV_HOTELS, payload: ownerFavHotels });
};

export const getOwner = (id:string):any => async (dispatch: DispatchType) => {
    const {data: {owner}} = await axios.get(`/owners/${id}`)
    return dispatch({ type: GET_OWNER, payload: owner})
}
