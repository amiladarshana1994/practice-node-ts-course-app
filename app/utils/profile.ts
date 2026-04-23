
type profileType = {
    name: string,
    login: string,
    avatar_url: string,
    blog: string,
    location: string,
    bio: string,
    public_repos: number,
    public_gists: number
}

export const defaultProfile: profileType[] = [
    {
        name: "name",
        login: "login",
        avatar_url: "https://gravatar.com/avatar/1678af3de363f9b2dcc494e7ca6e0f6a?s=400&d=robohash&r=x",
        blog: "blog",
        location: "location",
        bio: "bio",
        public_repos: 1,
        public_gists: 1
    }
];

export default profileType;