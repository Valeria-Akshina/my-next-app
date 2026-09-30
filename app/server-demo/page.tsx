export default async function ServerDemo() {
    const time = new Date().toISOString();
    console.log('Это сообщение появится в терминале сервера, а не в браузере');

    return (
        <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Server Component</h1>
        <p>Время, сгенерированное на сервере: <strong>{time}</strong></p>
        </main>
    );
}