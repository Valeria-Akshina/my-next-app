'use client';

import { useState } from 'react';
import { greet } from '../actions';

export default function GreetDemo() {
    const [message, setMessage] = useState<string>('');

    const handleGreet = async () => {
        const res = await greet('Студент');
        setMessage(res);
    };

    return (
        <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Вызов Server Action из Client Component</h1>
        <button 
            onClick={handleGreet}
            style={{
            padding: '8px 16px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
            }}
        >
            Поздороваться
        </button>
        {message && <p style={{ marginTop: '1rem', color: '#16a34a' }}>{message}</p>}
        </main>
    );
}