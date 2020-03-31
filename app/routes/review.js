import Route from '@ember/routing/route';

export default class ReviewRoute extends Route {
    model(params) {
        console.log('This is the dynamic segment data: ' + params.review_id);
        // make an API request that uses the id
    }
}
