import React from "react";
import { useEffect, useState } from "react";
import type { Song, page} from "../types/types";
import {basicUrl} from "../types/types"

interface SongsFetchProps {
    page: page;
    onSongsLoaded: (songs: Song[]) => void;
}



const SongsFetch = ({ page, onSongsLoaded }: SongsFetchProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    const fetchSongs = async () => {
        setIsLoading(true);
        console.log(`Fetch check : current page: ${page}`);
        try {
            const response = await fetch(`${basicUrl}/api/${page}`);            
            const data = await response.json();
            
            onSongsLoaded(data); 
        }
        catch (err) {
            setError("Something went wrong");
            console.error(err);
        }
        finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSongs();
    }, [page]);

    return (
        <div >
            {isLoading && <p>Loading songs...</p>}
            {error && <p>{error}</p>}
        </div>
    );
}

export default SongsFetch;