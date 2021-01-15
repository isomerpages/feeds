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
        { 
          title: 'Feedly', 
          field: 'feedUrl', 
          formatter: (cell) => {
            const url = cell.getValue()
            const img = document.createElement('img')
            img.setAttribute('src', 'http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-small_2x.png')
            img.setAttribute('width', '61')
            img.setAttribute('height', '20')
            img.setAttribute('alt', 'Follow this on Feedly')
            const a = document.createElement('a')
            a.appendChild(img)
            a.setAttribute('href', `https://feedly.com/i/subscription/feed%2F${encodeURIComponent(url)}`)
            a.setAttribute('target', 'blank')
            return a
          },
        },
        { title: 'Feed URL', field: 'feedUrl' }
      ]
    })
  })
