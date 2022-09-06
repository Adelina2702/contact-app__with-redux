import {
    DATA_GET_REQUEST,
    DATA_GET_SUCCESS,
    DATA_GET_FAIL,
    SORT_A_Z,
    SEARCH_CONTACT,
    SORT_Z_A,
    UPDATE_CONTACT,
  } from "./type";
  const Url =
    "https://my-json-server.typicode.com/RomanChasovitin/demo-api/users";
  export const getUsers = () => {
    return {
      type: DATA_GET_REQUEST
    };
  };
  export const getSucces = (data) => {
    return {
      type: DATA_GET_SUCCESS,
      payload: data
    };
  };
  export const GetFail = (error) => {
    return {
      DATA_GET_FAIL,
      payload: error
    };
  };
  export const sortAz = () => {
    return {
      type: SORT_A_Z
    };
  };
  export const sortZa = () => {
    return {
      type: SORT_Z_A
    };
  };
  export const searchContact = (payload) => {
    return {
      type: SEARCH_CONTACT,
      payload
    };
  };
  export const updateContact =(payload)=>{
    return{
      type:UPDATE_CONTACT,
      payload,
    }
  }
  
  export const GetAllUsers = () => {
    return (dispach) => {
      dispach(getUsers());
      fetch(Url)
        .then((responce) => responce.json())
        .then((data) => {
          dispach(getSucces(data.data));
        })
        .catch((error) => {
          dispach(GetFail(error.massage));
        });
    };
  };
  