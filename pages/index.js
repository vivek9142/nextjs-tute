import Link from 'next/link'

function HomePage(){
    return(
        <div>
            <h1>The Home Page</h1>
            <ul>
                <li>
                    {/* a tag works but has its disadvantages in SPA */}
                    <a href="/portfolio">Portfolio</a>
                </li>

                <li>
                    <Link replace href="/portfolio">Portfolio</Link>
                </li>

                
                <li>
                    <Link replace href="/clients">Clients</Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;