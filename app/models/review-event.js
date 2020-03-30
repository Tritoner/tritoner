import Model from '@ember-data/model';

export default class ReviewEventModel extends Model {
    @attr title;
    @attr description;
    @attr startDate;
    @attr endDate;
    @attr spotifyId; // Todo - confirm
    @attr participants; // the ids of the participating users
    /*
     * How do we think we will query the tracklist or individual songs
     * They likely have meta-data of their own. E.g. feature artists, trackname, length 
     */
    @attr reviewItems;
}
