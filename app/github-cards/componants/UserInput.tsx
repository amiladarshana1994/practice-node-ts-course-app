import profileType from "@/app/utils/profile";
import {useRef, useState} from "react";

type Props = {
    addProfile: (profile: profileType) => void
}
export default function UserInput({addProfile}: Props) {
    const nameRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const username = nameRef.current?.value?.trim();
                if (!username) return;

                fetch(`https://api.github.com/users/${username}`)
                    .then(async (res) => {
                        const data = await res.json();
                        if (!res.ok) {
                            throw new Error(data?.message || "User not found");
                        }
                        return data;
                    })
                    .then((res) => {
                        const {name, login, avatar_url, bio, location, blog, public_repos, public_gists} = res;
                        const prof:profileType = {
                            name: name,
                            login: login,
                            avatar_url: avatar_url,
                            blog: blog,
                            location: location,
                            bio: bio,
                            public_repos: public_repos,
                            public_gists: public_gists
                        }
                        setError(null);
                        addProfile(prof)
                    }).catch(err => setError(err.message));
            }}>
                <input ref={nameRef} type="text" placeholder="Enter GitHub username" />
                <button type="submit">Search</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}