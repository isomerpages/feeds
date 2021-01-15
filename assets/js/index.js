const url = 'https://api.sheety.co/9267f9b9854eadeb29693c9af10d6eb3/newsFeedsFromTheSingaporeGovernment/feeds'
fetch(url)
  .then((response) => response.json())
  .then(({ feeds }) => {
    new Tabulator('#feeds', {
      data: feeds,
      columns: [
        { title: 'Type', field: 'type', headerFilter: true },
        { title: 'Government Body', field: 'governmentBody', headerFilter: true },
        { title: 'Name', field: 'name' },
        { title: 'Feed URL', field: 'feedUrl' }
      ]
    })
  })
