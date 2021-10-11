import FlameIcon from "../icons/FlameIcon";
import RemoveIcon from "../icons/RemoveIcon";
import PlayIcon from "../icons/PlayIcon";

export default function Song(props) {
    return (
        <div className="song">
            <div className="song__left">
                <div className="song__index">
                    <span>{ props.index }</span>
                    <button className="song__button" aria-label="Play song"><PlayIcon /></button>
                </div>
                <div className="song__image" />
                <div className="song__details">
                    <div className="song__title">{ props.song.title }</div>
                    <div className="song__author">{ props.song.author }</div>
                </div>
            </div>
            <div className="song__middle">{ getDuration(props.song.duration_ms) }</div>
            <div className="song__right">
                <div className="song__popularity">
                    { props.song.popularity > 50 && <div>
                        <FlameIcon /> Trending
                    </div> }
                </div>
                <button className="song__button" aria-label="Remove song"><RemoveIcon /></button>
            </div>
        </div>
    );
}

const getDuration = (ms) => {
    const seconds = ms / 1000;
    const minutes = seconds / 60;
    return `${ Math.floor(minutes) }:${ Math.round(seconds % 60) }`
}
