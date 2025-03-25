const backendurl = import.meta.env.VITE_API_URL

export default backendurl

export async function GET(url, request = null) {
    let uri = request ? '?' + new URLSearchParams(request).toString() : '';

    if (!backendurl) {
        console.error('Backend URL is not defined');
        return { 'error': 'Backend URL is not defined' };
    }

    try {
        const response = await fetch(backendurl + url + uri, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': localStorage.getItem('jwt') ? `Bearer ${localStorage.getItem('jwt')}` : '',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Resource not found');
            }
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        return { "error": error.message };
    }
}
