
# Patikom-Server

Backend of my app, I used express js.



## Database Diagram

![App Screenshot](https://github.com/muhammetsarican/patikom/blob/83d3f4aa0014c432a9b2f9e60a5858a3c5d48712/server/public/database_diagram.png)


## API Reference

### Base Routes
This routes works for all routes. You have to set 'route-name' part the route path that you want to use.

- #### Get:

    ```http
    GET /<route-name>/
    ```

    | Description                |
    | :------------------------- |
    | *Only admins can perform this operation.*  |

    Lists all records.

    ```http
    GET /<route-name>/${id}
    ```

    | Parameter | Type     | Description                |
    | :-------- | :------- | :------------------------- |
    | `id` | `string` | **Required**. ID of what you want to list |

    Lists one record by id.

- #### Post:

    ```http
    POST /<route-name>/
    ```

    | Description                       |
    | :-------------------------------- |
    | *Only admins can perform this operation.* |

    Creates a record.

- #### Patch:

    ```http
    PATCH /<route-name>/${id}
    ```

    | Parameter | Type     | Description                       |
    | :-------- | :------- | :-------------------------------- |
    | `id`      | `string` | **Required**. ID of what you want to update |

    Updates a record by id.

- #### Delete:

    ```http
    DELETE /<route-name>/${id}
    ```

    | Parameter | Type     | Description                       |
    | :-------- | :------- | :-------------------------------- |
    | `id`      | `string` | **Required**. ID of what you want to delete |

    Deletes a record by id.

### User Routes
These routes are special routes.
- #### Post:

    ```http
    POST /user/login
    ```


    Provides to login the user.

    ```http
    POST /user/register
    ```


    Provides to register an user.

    ```http
    POST /user/${user-id}/change-role
    ```

    | Parameter | Type     | Description                       |
    | :-------- | :------- | :-------------------------------- |
    | `user-id`| `string` |  **Required**. ID of the user whose role you want to change | *Only admins can perform this operation.* |


    Updates the role of an user by user id.

### Chip Routes
These routes are special routes. You have to enter 'chip' instead of 'route-name' at base route.

### Animal Routes
These routes are special routes.
- #### Patch:

    ```http
    PATCH /animal/${id}/add-vaccine/${vaccine_id}
    ```

    | Parameter | Type     | Description                       |
    | :-------- | :------- | :-------------------------------- |
    | `id`      | `string` |  **Required**. ID of the animal for which you want to add a vaccine record | *Only admins and vets can perform this operation.* |
    | `vaccine-id`| `string` |  **Required**. ID of the vaccine you want to add | *Only admins and vets can perform this operation.* |


    Adds vaccine to vaccines list at animal record by vaccine id.

### Folk Routes
These routes are special routes. You have to enter 'folk' instead of 'route-name' at base route.

### Genre Routes
These routes are special routes. You have to enter 'genre' instead of 'route-name' at base route.

### Pregnant Log Routes
These routes are special routes. You have to enter 'pregnant-log' instead of 'route-name' at base route.

### Treatment Routes
These routes are special routes.
- #### Patch:

    ```http
    PATCH /treatment/${id}/add-category/${category_id}
    ```

    | Parameter | Type     | Description                       |
    | :-------- | :------- | :-------------------------------- |
    | `id`      | `string` |  **Required**. ID of the treatment for which you want to add a category record| *Only admins and vets can perform this operation.* |
    | `category-id`| `string` |  **Required**. ID of category you want to add | *Only admins and vets can perform this operation.* |


    Adds category to categories list at treatment record by category id.

    ```http
    PATCH /treatment/${id}/add-medicine/${medicine_id}
    ```

    | Parameter | Type     | Description                       |
    | :-------- | :------- | :-------------------------------- |
    | `id`      | `string` |  **Required**. ID of the treatment for which you want to add a medicine record | *Only admins and vets can perform this operation.* |
    | `medicine-id`| `string` |  **Required**. ID of medicine you want to add | *Only admins and vets can perform this operation.* |


    Adds medicine to medicines list at treatment record by medicine id.

### Category Routes
These routes are special routes. You have to enter 'category' instead of 'route-name' at base route.

### Medicine Routes
These routes are special routes. You have to enter 'medicine' instead of 'route-name' at base route.

### Vaccine Routes
These routes are special routes. You have to enter 'vaccine' instead of 'route-name' at base route.