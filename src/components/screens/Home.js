import React from "react";
import PrayerTimes from '../PrayerTimes';
import '../../App.css';
import HomeImage from "../HomeImage";
import Cards from "../Cards";
import Newsletter from "../Newsletter";

export default function Home() {
    return (
        <>
        <HomeImage />
        <PrayerTimes city="Atlanta" country="Georgia" method={2} />
        <Cards />
        <Newsletter />
        </>
    );
}