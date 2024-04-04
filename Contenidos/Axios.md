# Axios

Axios es una librería que nos permite hacer peticiones HTTP desde el cliente. Es muy similar a la función `fetch` de JavaScript, pero con una sintaxis más sencilla y fácil de usar.

## **Instalación**

Para instalar Axios, simplemente debemos incluir el siguiente script en nuestro HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### GET

```
axios.get('http://webcode.me').then(resp => {

    console.log(resp.data);
});

// CON CONFIG

const config = {
        method: 'get',
        url: 'http://webcode.me',
				headers: { 'User-Agent': 'Axios - console app' }
    }

    let res = await axios(config)

    console.log(res.status);
```

### POST

```
async function makeGetRequest() {

    let payload = { name: 'John Doe', occupation: 'gardener' };

    let res = await axios.post('http://httpbin.org/post', payload);

    let data = res.data;
    console.log(data);
}

makeGetRequest();

// Forms

async function makeGetRequest() {

    const form_data = new FormData();
    form_data.append('name', 'John Doe');
    form_data.append('occupation', 'gardener');

    let res = await axios.post('http://httpbin.org/post', form_data, 
        { headers: form_data.getHeaders() });

    let data = res.data;
    console.log(data);
}
```

### Multiples POST

```jsx
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```

### Multiples GET

```
async function makeRequests(urls) {

    const fetchUrl = (url) => axios.get(url);
    const promises = urls.map(fetchUrl);

    let responses = await Promise.all(promises);

    responses.forEach(resp => {
        let msg = `${resp.config.url} -> ${resp.headers.server}: ${resp.status}`;
        console.log(msg);
    });
}

```

### DELETE

```
async function makePostRequest() {

    let res = await axios.delete('http://localhost:3000/users/2/');

    console.log(res.status);
}
```