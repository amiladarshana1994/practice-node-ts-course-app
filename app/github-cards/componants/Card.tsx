import profileType from "@/app/utils/profile";
import styles from "./Card.module.scss";

type Props = {
    profile: profileType
}
export default function Card({profile}: Props) {
    return (
        <div className={styles.container}>
            <img src={profile.avatar_url} alt={profile.name} className={styles.avatar} />
            <div className={styles.info}>
                <h2>{profile.name}</h2>
                <p>{profile.bio}</p>
                <p>Location: {profile.location}</p>
                <p>Blog: {profile.blog}</p>
                <p>Public Repos: {profile.public_repos}</p>
                <p>Public Gists: {profile.public_gists}</p>
            </div>
        </div>
    );
}