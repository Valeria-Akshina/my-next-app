'use server'; // Server Action

export async function greet(name: string): Promise<string> {
    const timestamp = new Date().toISOString();
    return `Привет, ${name}! Серверное время выполнения: ${timestamp}`;
}