
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

- For showing logs, run this

  ```bash
    docker-compose logs
  ```

#### At last go the port which you set at .env file in base dir, Congratulations 🎉
## 📈 Weekly Progress
  ### Week 1: Laying the Foundation

  - 🗂 Planned and structured my project using Trello, ensuring a well-organized approach.
  - 🌐 Developed the backend API, diving deep into Node.js, Express, and Docker.
  - 🧠 Enhanced my understanding of Express, JWT, and the importance of error handling.

  ### Week 2: Testing the Waters

  - 🛠 Tested the app using Jest and Supertest, fixing routes and controllers along the way.
  - 🔍 Realized the critical importance of testing, and improved test codes by refactoring repeated code into functions or classes.
  - 🚀 Gained a newfound appreciation for testing as an informative and enjoyable part of development.

  ### Week 3: Designing the UI

  - 🎨 Created a cohesive UI theme using Tailwind CSS, covering various pages like the main page, login, and records pages.
  - 🟧 Developed a color palette with an orange theme, and deepened my understanding of UI design principles.

  ### Final Week: Bringing It All Together

  - ⚛️ Built the frontend app using ReactJS, combining the backend and theme into a cohesive application.
  - 🔄 Integrated React Router DOM for navigation, React Hook Form for form handling, Yup for validation, and Axios for API communication.
  - 🛠 Practiced and refined my React skills, especially in routing and form management.

## 🖋️ Authors

- [@muhammetsarican](https://www.github.com/muhammetsarican)

