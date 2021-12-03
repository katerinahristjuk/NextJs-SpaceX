import moment from 'moment';
import Link from 'next/Link';
import styles from '../../styles/Mission.module.css'

export function Mission({ mission, href }) {
    return (
        <Link  href={href} mission  >
            <div className={styles.mission}>
                <img width='10%' src={mission.links.mission_patch_small} alt='(N/A from API)' />
                <h3>{mission.mission_name}</h3>
                <h4>Launched on: {moment(new Date(mission.launch_date_local)).format("DD-MM-YYYY HH:mm")}</h4>
                <p>{mission.launch_site.site_name_long}</p>
            </div>
        </Link>
    )
}