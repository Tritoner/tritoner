import Model from '@ember-data/model';

export default class ReviewModel extends Model {
    @attr userId; // The user that submitted the review
    @attr title;
    @attr description;
    @attr dateSubmitted;
    @attr reviewItems; // see comment in review-event.js. This is where the user leaves comments and scores per track
}
