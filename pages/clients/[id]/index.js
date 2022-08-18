import { useRouter } from 'next/router';

export default function ClientProjectPage(){

    const router = useRouter();
    console.log(router.query);

    function loadProjectHandler(){
        //load data...
        //navigate away 
        // router.push('/clients/max/projecta');
        /*
        OR we can set a pathname here 
        */ 
        router.push({
            pathname:'/clients/[id]/[clientprojectid]',
            query:{id:'max',clientprojectid:'projecta'}
        });
    }
    return (
        <div>
            <h1>The Projects of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}