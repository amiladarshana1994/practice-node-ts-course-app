"use client";
import Header from "@/app/github-cards/componants/Header";
import CardList from "@/app/github-cards/componants/CardList";
import UserInput from "@/app/github-cards/componants/UserInput";
import { defaultProfile } from "@/app/utils/profile";
export default function Index() {
    return (
        <div >
            <Header />
            <UserInput />
            <CardList profiles={defaultProfile}/>
        </div>
    );
}
