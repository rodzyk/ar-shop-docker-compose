# AR Shop API

Simple API for AR Shop.

## Quick start

```
npm i
npm start
```

AR Shop API app listening at http://localhost:3000

## API

**API Endpoint** 

```
http://localhost:3000
```


### Get products

**Path**
```
GET /products
```

**Description**

Get product list.


**Response Example (200 OK)**

```JSON
[
    {
        "id": 1,
        "name": "article 1",
        "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 25
    },
    {
        "id": 2,
        "name": "article 2",
        "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 35
    },
    {
        "id": 3,
        "name": "article 3",
        "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 45
    }
]
```

## License
[MIT](https://choosealicense.com/licenses/mit/)