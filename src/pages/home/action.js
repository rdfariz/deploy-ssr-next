import fetch from '../../utils/fetch'

export function setName(name) {
    return dispatch => {
      dispatch({
        type: 'SET_NAME',
        name
      })
    } 
}

export function getData() {
  return dispatch => {
    const options = {
      method: 'GET',
      url: 'https://us-central1-himadira-karya.cloudfunctions.net/karya',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
    return fetch(options)
    .then((res)=>{
      dispatch(setKarya(res.data))
      console.log(res)
    }).catch((err)=>{
      dispatch(setKarya([]))
      console.log(err)
    })
  }
}

function setKarya(karya) {
  return {
    type: 'SET_KARYA',
    karya
  }
}