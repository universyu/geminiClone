async function run(prompt) {
    const response = await fetch('http://127.0.0.1:3002/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();
    return data;
}

export default run;