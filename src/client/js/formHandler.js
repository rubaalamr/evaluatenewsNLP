function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let url = document.getElementById('name').value
    Client.checkForurl(url)
    fetch('http://localhost:2020/url', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({text:url}),
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('theUrl').innerHTML = `your URL: ${url}`;
        document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`;
        document.getElementById('polarityConfidence').innerHTML = `Polarity Confidence: ${res.polarity_confidence}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('subjectivityConfidence').innerHTML = `Subjectivity confidence: ${res.subjectivity_confidence}`;
    })

}

export { handleSubmit }
