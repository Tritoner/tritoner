import Model, { attr } from '@ember-data/model';

export default class ReviewItemModel extends Model {
    @attr title;
    @attr length;
    @attr artists;
}
