"use client";
import Header from "@/app/github-cards/componants/Header";
import CardList from "@/app/github-cards/componants/CardList";
import UserInput from "@/app/github-cards/componants/UserInput";
import profileType, { defaultProfile } from "@/app/utils/profile";

import {useState} from "react";

export default function Index() {
    const [profiles, setProfiles] = useState(defaultProfile);
    function addProfile(profile: profileType) {
        setProfiles((prev) => [...prev, profile]);
    }

    return (
        <div >
            <Header />
            <UserInput addProfile={addProfile}/>
            <CardList profiles={profiles}/>
        </div>
    );
}
