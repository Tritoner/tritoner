import Route from '@ember/routing/route';

export default class UserRoute extends Route {
    model(params) {
        console.log('This is the dynamic segment data: ' + params.user_id);
        // make an API request that uses the id
    }
}
