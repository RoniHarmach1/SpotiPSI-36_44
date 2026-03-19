export interface Song {
    id: number;
    name: string;
    artist: string;
    album: string;
}

export type page = 'songs' | 'favorites' | 'playlists';


export type urls = "/api/songs" | "/api/playlists" | "/api/favorites";


export const basicUrl = "http://127.0.0.1:5001";

