{
    function  pluck(records : any[], key: string) {
        return records.map(r => r[key]);
    }
}
{
    interface Album {
        artist: string;
        title: string;
        releaseDate: Date;
        recordingType: RecordingType;
    }
    type RecordingType = 'studio' | 'live';
    // type K = keyof Album;
    function  pluck<T>(records : T[], key: keyof T) {
        return records.map(r => r[key]);
    }
    const albums: Album[] = [{
        artist: 'Miles Davis',
        title: 'Kind of Blue',
        releaseDate: new Date('1959-08-17'),
        recordingType: 'studio',
    }];
    const releaseDates = pluck(albums, 'releaseDate');
}
{
    interface Album {
        artist: string;
        title: string;
        releaseDate: Date;
        recordingType: RecordingType;
    }
    type RecordingType = 'studio' | 'live';
    // type K = keyof Album;
    function  pluck<T,K extends keyof T>(records : T[], key: K) {
        return records.map(r => r[key]);
    }
    const albums: Album[] = [{
        artist: 'Miles Davis',
        title: 'Kind of Blue',
        releaseDate: new Date('1959-08-17'),
        recordingType: 'studio',
    }];
    const artists = pluck(albums, 'artist');
    const titles = pluck(albums, 'title');
    const releaseDates = pluck(albums, 'releaseDate');
    const recordingTypes = pluck(albums,'recordingType');
}