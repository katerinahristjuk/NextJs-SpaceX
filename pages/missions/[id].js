import MainContainer from "../components/MainContainer";
import { useRouter } from "next/router";
import styles from '../../styles/detail.module.css';

export default function Mission({ mission }) {
    const { query } = useRouter();

    return (
        <MainContainer >
            <div className={styles.detail}>
                <h1>Hello, <span>{mission.mission_name}</span> mission id <span>{mission.id}</span>!</h1>
                <h2>Rocket: {mission.rocket.rocket.name}</h2>
                <h3>Country origin: {mission.rocket.rocket.country}</h3>
                <h4>Description: {mission.rocket.rocket.description}</h4>
                <img width='20%' src={mission.links.mission_patch_small} alt='(N/A from API)' />
            </div>

        </MainContainer>
    )
}

export async function getServerSideProps({ params }) {
    const api = 'https://api.spacex.land/graphql/';
    const response = await fetch(api, {
        method: 'POST',

        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `{
                    launchesPast {
                        mission_name
                        launch_date_local
                        launch_site { 
                            site_name_long
                        }
                        links {
                            mission_patch_small
                        }
                        rocket {
                            rocket {
                                name
                                country
                                description
                            }
                        }
                        id
                    }
                }`
        })
    })
    const data = await response.json();
    const missions = data.data.launchesPast
    const mission = missions.find(i => i.id == params.id)
    return {
        props: { mission }
    }
}

