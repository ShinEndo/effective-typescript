"use strict";
{
    function pluck(records, key) {
        return records.map(r => r[key]);
    }
}
{
    // type K = keyof Album;
    function pluck(records, key) {
        return records.map(r => r[key]);
    }
    const albums = [{
            artist: 'Miles Davis',
            title: 'Kind of Blue',
            releaseDate: new Date('1959-08-17'),
            recordingType: 'studio',
        }];
    const releaseDates = pluck(albums, 'releaseDate');
}
{
    // type K = keyof Album;
    function pluck(records, key) {
        return records.map(r => r[key]);
    }
    const albums = [{
            artist: 'Miles Davis',
            title: 'Kind of Blue',
            releaseDate: new Date('1959-08-17'),
            recordingType: 'studio',
        }];
    const artists = pluck(albums, 'artist');
    const titles = pluck(albums, 'title');
    const releaseDates = pluck(albums, 'releaseDate');
    const recordingTypes = pluck(albums, 'recordingType');
}
