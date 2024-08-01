
# Patikom-Server

Backend of my app, I used express js.



## Database Diagram

![App Screenshot](https://github.com/muhammetsarican/patikom/blob/83d3f4aa0014c432a9b2f9e60a5858a3c5d48712/server/public/database_diagram.png)


## API Reference

### Base Routes
This routes works for all routes.

- #### Get:

    -
        ```http
        GET /
        ```

        | Description                |
        | :------------------------- |
        | **Required**. Admin |

        Lists all records.

    -
        ```http
        GET /${id}
        ```

        | Parameter | Type     | Description                |
        | :-------- | :------- | :------------------------- |
        | `id` | `string` | Lists one record by the id, **Required**. Admin, Id of item to fetch |

        Lists one record by id.

- #### Post:

    -
        ```http
        POST /
        ```

        | Description                       |
        | :-------------------------------- |
        |  **Required**. Admin, Id of item to fetch |

        Creates a record.

- #### Patch:

    -
        ```http
        PATCH /${id}
        ```

        | Parameter | Type     | Description                       |
        | :-------- | :------- | :-------------------------------- |
        | `id`      | `string` | **Required**. Admin, Id of item to fetch |

        Updates a record by id.

- #### Delete:

    -
        ```http
        DELETE /${id}
        ```

        | Parameter | Type     | Description                       |
        | :-------- | :------- | :-------------------------------- |
        | `id`      | `string` | **Required**. Admin, Id of item to fetch |


        Deletes a record by id.

### User Routes
These routes are special routes.
- #### Post:

    - 
        ```http
        POST /user/login
        ```

        | Description                       |
        | :-------------------------------- |
        |  **Required**. Admin, Id of user to fetch |


        Provides to login the user.

    -
        ```http
        POST /user/register
        ```

        | Description                       |
        | :-------------------------------- |
        |  **Required**. Admin, Id of user to fetch |


        Provides to register an user.

    -
        ```http
        POST /user/${user-id}/change-role
        ```

        | Parameter | Type     | Description                       |
        | :-------- | :------- | :-------------------------------- |
        | `user-id`      | `string` |  **Required**. Admin, Id of user to fetch |


        Updates the role of an user by user id.