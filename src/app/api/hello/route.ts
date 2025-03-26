export async function GET() {
    const apiUrl = process.env.API_URL;
    
    if (!apiUrl) {
        return new Response("API_URL is not set", { status: 500 });
    }

    try {
        const response = await fetch(`${apiUrl}/hello`);

        if (!response.ok) {
            console.error("Backend error:", response.statusText);
            return new Response("Failed to fetch from backend", { status: 500 });
        }

        const message = await response.text();
        return new Response(JSON.stringify({ message }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Fetch error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
