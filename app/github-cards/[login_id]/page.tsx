import Card from "@/app/github-cards/componants/Card";
import profileType from "@/app/utils/profile";
import { notFound } from "next/navigation";

type Props = {
    params: {
        login_id: string;
    };
};

export default async function ProfileRoute({ params }: Props) {
    const loginId = params.login_id;
    const response = await fetch(`https://api.github.com/users/${loginId}`, {
        next: { revalidate: 60 }
    });

    if (response.status === 404) {
        notFound();
    }

    if (!response.ok) {
        throw new Error("Failed to load GitHub profile");
    }

    const user = await response.json();
    const profile: profileType = {
        name: user.name ?? user.login,
        login: user.login,
        avatar_url: user.avatar_url,
        blog: user.blog ?? "",
        location: user.location ?? "",
        bio: user.bio ?? "",
        public_repos: user.public_repos ?? 0,
        public_gists: user.public_gists ?? 0
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", padding: "24px" }}>
            <Card profile={profile} />
        </div>
    );
}