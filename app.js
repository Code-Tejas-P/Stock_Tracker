document.getElementById('fetchPrice').addEventListener('click', async () => {
    const ticker = document.getElementById('ticker').value;
    const apiKey = 'E58IAPPUF3OPF9RB'; // Replace with your actual API key
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const stockInfo = data["Global Quote"];

        if (stockInfo) {
            document.getElementById('stockData').innerHTML = `
                <p>Stock: ${stockInfo['01. symbol']}</p>
                <p>Price: $${stockInfo['05. price']}</p>
                <p>Change: ${stockInfo['09. change']} (${stockInfo['10. change percent']})</p>
            `;
        } else {
            document.getElementById('stockData').innerHTML = `<p>Stock not found.</p>`;
        }
    } catch (error) {
        document.getElementById('stockData').innerHTML = `<p>Error fetching data.</p>`;
    }
});
