import Model, { attr } from '@ember-data/model';

export default class ReviewModel extends Model {
    @attr userId;
    @attr title;
    @attr description;
    @attr dateSubmitted;
    @attr reviewItemIds;
}
