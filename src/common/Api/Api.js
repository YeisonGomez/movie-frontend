import { store } from '../../store/Store';
import { apiUrl } from '../Config/Config';
import Token from '../LocalStorage/Token';
//import authActions from '../../services/Auth/AuthActions';

export class Api{

  post(url, data, header){
      let dataBody = JSON.stringify(data);
      
      return fetch(`${apiUrl}${url}`, {
        method: 'POST',
        headers: (header ? header: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${ Token.getToken() }`
        }),
        body: dataBody
      }).then(async response => {
        if(response.status === 401){
          //store.dispatch(authActions.logout()); 
          return response;
        }
        response.payload = await response.json()
        return response;
      })
  }

  put(url, data, header){
    let isFormData = data instanceof FormData;
    
    return fetch(`${apiUrl}${url}`, {
      method: 'PUT',
      headers: (header ? header: 
        isFormData? 
        { 'Authorization': `Bearer ${ Token.getToken() }` }
        : 
        {
          'Accept': isFormData? '': 'application/json',
          'Content-type': isFormData? '': 'application/json',
          'Authorization': `Bearer ${ Token.getToken() }`
        }
      ),
      body: isFormData? data: JSON.stringify(data) 
    }).then(async response => {
      if(response.status === 401) {
        //store.dispatch(authActions.logout()); 
        return response;
      }
      response.payload = await response.json()
      return response;
    })
  }
  
  get(url, params){
      url = new URL(`${apiUrl}${url}`);
      if(params)
          Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      return fetch(url, {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${ Token.getToken() }`
          }
      }).then(async response => {
        if(response.status === 401) {
          //store.dispatch(authActions.logout()); 
          return response;
        }
        response.payload = await response.json()
        return response;
      })
  }
}
  
export default new Api();