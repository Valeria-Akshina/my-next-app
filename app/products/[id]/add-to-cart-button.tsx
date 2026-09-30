'use client';

import { useState } from 'react';

export default function AddToCartButton() {
    const [added, setAdded] = useState<boolean>(false);

    return (
        <button 
        onClick={() => setAdded(true)} 
        disabled={added}
        style={{
            padding: '10px 20px',
            backgroundColor: added ? '#9ca3af' : '#16a34a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            cursor: added ? 'not-allowed' : 'pointer'
        }}
        >
        {added ? 'Добавлено!' : 'В корзину'}
        </button>
    );
}