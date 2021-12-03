import MainContainer from "./components/MainContainer";

import { Mission } from "./components/Mission";


export default function Index({ missions }) {
    return (
        <MainContainer >
            {!missions.length > 0 ?
                <h1>No missions yet</h1> :
                <div className='missions' >
                    {missions.map(i =>
                        <Mission key={i.id} mission={i} href={`/missions/${i.id}`} />
                    )}
                </div>
            }
            <style jsx>
                {`
                    .missions {
                        display: grid;
                        grid-gap: 15px;
                        grid-template-columns: auto auto auto;
                        text-align: center;
                    }
                `}
            </style>
        </MainContainer>

    )
}

export async function getStaticProps(context) {
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
    const raw = data.data.launchesPast
    const missions = raw.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
    return {
        props: { missions }
    }
}