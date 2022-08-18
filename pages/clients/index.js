import Link from 'next/link';

function ClientPage(){
const clients = [
    { id:'ma' , name:'Maxxilmilin'},
    {id:'manu',name:'Manuell'}
]

    return (
        <div>
            <h1>The Client Page</h1>
            <ul>
                <li><Link href="/clients/max">VV</Link></li>
                <li><Link href="/clients/manu">manu</Link></li>

                {/* {
                    clients.map(client =>{
                        return (<li key={client.id}>
                        <Link href={`/clients/${client.id}`}>{client.name}</Link>
                        </li>)
                    })
                } */}

                {/* Instead of providing a string which is the path you want to go to,
                you can provide an object.So now this is not a special double curly brace 
                syntax,this is still single curly braces to evaluate a JavaScript expression,
                and the expression here then just is a new object which I'm creating.
                
                And here that's a special kind of object Next.js expects, as an alternative 
                to a string as a value for the ref. And here we can set various properties 
                Next.js is expecting.For example, the path name, property which here would 
                be /clients/ and then important [Id] So we describe the path as it would 
                lead to our file in the pages folder. So here we want to go into client's 
                folder and then into the Id folder with square brackets around Id and then 
                to the index.js file as you learned, that is then the default file Next.js 
                we'll be looking for, 
                
                There query is also an object we can retrieve to have key value pairs where 
                the keys are our dynamic segment identifiers and the values are the concrete 
                values entered and it's the same here when we define a link.We then have a 
                key which is our dynamic segment identifier. So Id in this case, and then 
                the concrete value for this concrete link, which we're building here. 
                So in this case, client.id and that that is then an alternative way 
                of building that link.*/}

                {
                    clients.map(client =>{
                        return (<li key={client.id}>
                        <Link href={{
                            pathname: '/clients/[id]',
                            query:{id:client.id}
                        }}>{client.name}</Link>
                        </li>)
                    })
                }

            </ul>
        </div>
    )
};

export default ClientPage;