import React from "react";
import { useEffect, useState } from "react";
import type { Song } from "../types/types";

interface SongsFetchProps {
    onSongsLoaded: (songs: Song[]) => void;
}



const SongsFetch = ({ onSongsLoaded }: SongsFetchProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    const fetchSongs = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:5001/api/songs");            
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
    }, []);

    return (
        <div >
            {isLoading && <p>Loading songs...</p>}
            {error && <p>{error}</p>}
        </div>
    );
}

export default SongsFetch;