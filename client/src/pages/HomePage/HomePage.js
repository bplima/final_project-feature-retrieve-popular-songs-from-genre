import React from "react";
import PartySilhouetteIcon from "../../components/icons/PartySilhouetteIcon";
import GenreCard from "../../components/GenreCard/GenreCard";

export default function HomePage() {
    return (
        <div className="home-page">
            <PartySilhouetteIcon />
            <div className="home-page__title">Create your next party playlist!</div>
            <div className="home-page__subtitle">Choose a genre</div>
            <div className="home-page__genres">
                <GenreCard genre="hip-hop" label="Hip Hop" color="#CE1509" />
                <GenreCard genre="hard-rock" label="Hard Rock" color="#09CE9F" />
                <GenreCard genre="electronic" label="Techno" color="#096FCE" />
                <GenreCard genre="club" label="Club" color="#CA09CE" />
            </div>
        </div>
    );
}
