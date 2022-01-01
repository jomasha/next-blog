import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/posts';

export async function getStaticProps() {
    const posts = await getPosts();
    return {
        props: { posts },
    };
}

function HomePage({ posts }) {
    console.log("[homepage] props", posts);
    return (
        <>
            <Head>
                <title>My Blog</title>
                <meta name="description" value="This is my blog" />
            </Head>
            <main>
                <h1>Links</h1>
                <ul>
                    {posts.map((post) => {
                        return (<li key={post.slug}>
                            <Link href={`/posts/${post.slug}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>)
                    })};
                </ul>
            </main>

        </>
    );
}

export default HomePage;