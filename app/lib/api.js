/* @flow */

class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route: string): Promise<any> {
    return this.xhr(route, null, 'GET');
  }

  static put(route: string, params: Object): Promise<any> {
    return this.xhr(route, params, 'PUT')
  }

  static post(route: string, params: Object): Promise<any> {
    return this.xhr(route, params, 'POST')
  }

  static delete(route: string, params: Object): Promise<any> {
    return this.xhr(route, params, 'DELETE')
  }

  // Helper function to for api actions.
  static xhr(route: string, params: object, verb: 'GET'|'PUT'|'POST'|'DELETE'): Promise<any> {
    // Base endpoint. eg. http://www.reddit.com/
    const host = 'we-need-some-url-here-someday'
    // Combine base url and given route.
    const url = `${host}${route}`

    // Create options for api request. We always need atleast method
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );

    // Add Content-Type to options. Most APIs require this.
    options.headers = Api.headers({ 'Content-Type': 'application/json' })

    // Do actual request by using fetch.
    return fetch(url, options).then( resp => {

      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json );
  }
}
export default Api
