import {useRouter} from 'next/router'

export default function BlogsPostsPage(){
    const router = useRouter();
    // /blogs/2012/12/abc
    console.log(router.query); // slug: (3) ['2012', '12', 'abc']

    return <div>
        <h1>
            The Blog Posts
        </h1>
    </div>
}