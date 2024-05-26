
async function run(prompt) {
    const response = await fetch('http://10.249.8.149:3002/generate', {
        method: 'POST',
        mode: 'cors',
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