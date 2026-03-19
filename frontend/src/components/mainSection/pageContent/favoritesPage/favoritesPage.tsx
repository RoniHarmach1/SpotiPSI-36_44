import type { Song } from "../../../types/types";
import SongsTable from "../songsTable/songsTable";

interface Props {
    allSongs: Song[];
    favoriteSongsIds: number[];
}

const PageContent = ({ allSongs, favoriteSongsIds }: Props) => {

    const favoriteSongs = allSongs.filter(song => {
        if (song.id in favoriteSongsIds) {
            return song;
        }
    });

    return (
        <div>
            <SongsTable songs={favoriteSongs}></SongsTable>
        </div>
    );
};

export default PageContent;

