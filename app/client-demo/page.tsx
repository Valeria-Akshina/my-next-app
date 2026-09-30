'use client';

import { useState } from 'react';

export default function ClientDemo() {
    const [count, setCount] = useState<number>(0);
    console.log('Это сообщение появится в консоли браузера (DevTools)');

    return (
        <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Client Component</h1>
        <button 
            onClick={() => setCount(count + 1)}
            style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            cursor: 'pointer'
            }}
        >
            Кликов: {count}
        </button>
        </main>
    );
}