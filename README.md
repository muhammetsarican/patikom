
# 🐾 PatiKom - Pet Tracking System

I'm doing my internship at [SmartICT](https://www.smartict.com.tr/). I started a project to track the condition of pets in veterinary clinics via the web.
## 💻 Tech Stack

**Client:** React JS

**Database:** Mongo DB

**Theme:** Tailwind CSS

**Server:** Node JS, Express JS


## 🔢 Environment Variables

To run this project you will need to add variables to the environment files under the base directory and the server directory. If you check you will see '*.env.example*' files. After editing these files, don't forget to change the name to '*.env*'.
## 🚀 Run Locally

Clone the project

```bash
  git clone https://github.com/muhammetsarican/patikom.git
```

Go to the project directory

```bash
  cd patikom
```

Install dependencies

```bash
  cd ./server && npm install
```

Run the dockerfile

```bash
  docker-compose up --build
```

- For hide the logs, run this

  ```bash
    docker-compose up -d --build
  ```

- For stop containers, run this

  ```bash
    docker stop patikom_{db,server}
  ```

#### At last go the port which you set at .env file in base dir, Congratulations 🎉
## 📈 Weekly Progress

### First Week

- **The goal:** Complete backend api

- **Personal improvements:** 
    - During this time, I repeated my knowledge about node, express and docker.
    - I better understood how to express works and how to use json web token.
    - I realized the importance of error handling.
    - I learned how to create better commits and run my application in docker.
    - I realized importance of planning and I gained experience in using Trello.
    - Lastly, I reinforced the information about the backend nicely.

## 🖋️ Authors

- [@muhammetsarican](https://www.github.com/muhammetsarican)

