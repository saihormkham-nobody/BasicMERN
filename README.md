
# My 2022 Reading List

This is a simple CRUD task management project developed using MERN Stack.

**In the web app**, you can do simple reading habit tracking actions such as:
- See all reading/finished books list.
- Record your current reading list.
- Update your reading finished date.
- Delete your records.


## Tech Stack

**Client:** React, Redux, MaterialUI

**Server:** Node, Express

**Databse:** MongoDb

**Deployment:** Docker, Docker-compose
## Infrastructure

The **Nginix** handles the incoming http requests. 
If the requests start with **/**, the Nginx re-routes to the ***React Server***.
If the requests start with **/api/**, the Nginx re-routes to the ***API Server***.

The **React Server** uses another ***self-contianed Nginix*** to serve static web contents.

The **Api Server** uses ***MongoDB*** as a database.

The **Rectangle Shape** represents a ***Docker Container***.

![App Screenshot](https://github.com/saihormkham-nobody/booklist/raw/main/screenshots/infrastructure.png)


## Authors

- [@Sai Horm Kham](https://github.com/saihormkham-nobody/)


## Run Locally

Clone the project

```bash
  git clone https://github.com/saihormkham-nobody/booklist.git
```

Go to the project directory

```bash
  cd booklist
```

Start the server

```bash
  docker-compose -f "docker-compose.dev.yml" up -d --build
```


## Deployment

To deploy this project run

```bash
  docker-compose -f "docker-compose.yml" up -d --build
```


## 🚀 About Me
I'm an Android Mobile Developer.

