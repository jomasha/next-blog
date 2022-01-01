import Head from "next/head";
import { getPost, getSlugs } from '../../lib/posts';
export async function getStaticPaths() {
    const slugs = await getSlugs();
    return {
        paths: slugs.map((slug) => ({
            params: { slug },
        })),
        fallback: false,
    };
}
export async function getStaticProps({ params: { slug } }) {
    console.log("[FirstPostPage] getStaticProps()", slug);
    const post = await getPost(slug);
    return {
        props: { post },
    };
}
function PostPage({ post: { title, date, body } }) {
    console.log("[FirstPostPage] render:", title)
    return (
        <>
            <Head>
                <title>{title} - My Blog</title>
                <meta name="description" value="This is my blog" />
            </Head>
            <main>
                <p>{date}</p>
                <h1>{title}</h1>
                <article dangerouslySetInnerHTML={{ __html: body }} />
            </main>
        </>
    );
}

export default PostPage;