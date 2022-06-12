# API Requirements


## API Endpoints
### User
- Index [GET]: '/users'
- Show [GET][token required]: '/users/:username'
- Create [POST][token required]: '/users'
- Authenticate [POST]: '/users/authenticate'
- Destroy [DELETE][token required]:'/users/delete/:id'

### Products
- Index [GET]: '/products'
- Show [GET]: 'products/:id'
- Create [POST][token required]: '/products'
- Destroy [DELETE][token required]:'/product/delete/:id'

### Orders
- Index [GET]: '/orders/'
- Show [GET]: '/orders/:id'
- Create [POST][token required]: '/orders'
- Destroy [DELETE][token required]:'/orders/delete/:id'
## Data Shapes
### User
- id (Primary Key)
- firstName
- lastName
- password

### Products
- id (Primary Key)
- name 
- price 
- category
### Orders
- id (Primary Key)
- quantity
- status
- user_id (Foreign Key)

