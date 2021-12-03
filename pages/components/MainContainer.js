import Link from "next/Link";

export default function MainContainer({children}) {
    return (
        <div>
            <div className='navbar'>
                <Link href='/'>
                    <a className='link'>SpaceX Missions</a>
                </Link>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        padding: 15px;
                    }
                    .link {
                        text-decoration: none;
                        color: rgb(197, 1, 1);
                        font-size: 2em;
                        margin: 10px
                    }
                `}
            </style>
        </div>
    )
}
