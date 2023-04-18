import Route from '@ember/routing/route';
import config from 'web/config/environment';

export default class ApplicationRoute extends Route {
  async model() {
    let response = await fetch(config.apiUrl);
    return response.json();
  }
}
