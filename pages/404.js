import Link from 'next/Link'

export default function Error() {
    return (
        <div>
            <h1> Unavaliable page :(</h1>
            <Link href='/'>
                <a className='link'>Please go back to the Main Page</a>
            </Link>
        </div>

    )
}