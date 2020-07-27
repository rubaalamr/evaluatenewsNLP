function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let url = document.getElementById('name').value
    Client.checkForurl(url)
    fetch('http://localhost:8000/url', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({text:url}),
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `Polarity: ${res.polarity} <br> Polarity Confidence: ${res.polarity_confidence}`
    })

}

export { handleSubmit }
