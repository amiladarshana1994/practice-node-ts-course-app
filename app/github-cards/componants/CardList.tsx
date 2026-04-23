import profileType from "@/app/utils/profile";
import Card from "@/app/github-cards/componants/Card";

type Props = {
    profiles: profileType[]
}
export default function CardList({profiles}: Props) {
    return (
        <>
            {
                profiles.map((profile, index) => (
                    <Card key={index} profile={profile} />
                ))
            }
        </>
    );
}