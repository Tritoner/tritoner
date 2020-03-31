import Model, { attr } from '@ember-data/model';

export default class ReviewEventModel extends Model {
    @attr title;
    @attr description;
    @attr startDate;
    @attr endDate;
    @attr spotifyId;
    @attr participants;
    @attr reviewItemIds; // TODO (chriselten) (this is a placeholder) I'm thinking we reuse the reviewItem content to populate here, but we can iterate as we get closer
}
