export async function generateStaticParams() {
    return [
        { slug: 'nextjs-vvedenie' },
        { slug: 'react-osnovy' },
    ];
}

export default async function BlogPost({
    params,
    }: {
    params: Promise<{ slug: string }>;
    }) {
    const { slug } = await params;

    return (
        <article style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Статья: {slug}</h1>
        <p>Содержимое публикации с идентификатором slug: <code>{slug}</code></p>
        </article>
    );
}