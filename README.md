# Project - HiveMind
Web technologies project of the University of Naples Federico II - 2023/2024

## Introduction
HiveMind is a Single Page Application (SPA) designed for managing and visualizing dynamic data through a responsive user interface.  
The frontend is developed using Angular, while the backend is implemented with Express.


## Project File Structure
```sh
.
├── README.md
├── Tecnologie Web - Progetto - 23-24.pdf
├── backend
│   ├── README.md
│   ├── clearDatabase.js
│   ├── controllers
│   │   ├── authController.js
│   │   ├── homepageController.js
│   │   └── ideaController.js
│   ├── database.db
│   ├── dockerfile
│   ├── index.js
│   ├── middleware
│   │   ├── authorization.js
│   │   └── validIdea.js
│   ├── models
│   │   ├── comment.js
│   │   ├── database.js
│   │   ├── idea.js
│   │   ├── user.js
│   │   └── vote.js
│   ├── package-lock.json
│   ├── package.json
│   └── routes
│       ├── authenticationRouter.js
│       ├── commentRouter.js
│       ├── homepageRouter.js
│       ├── ideaRouter.js
│       └── voteRouter.js
├── docker-compose.yaml
├── documentazione.pdf
└── frontend
    ├── README.md
    ├── angular.json
    ├── dockerfile
    ├── nginx.conf
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── logo.png
    ├── server.ts
    ├── src
    │   ├── app
    │   │   ├── _guards
    │   │   │   ├── auth.guard.spec.ts
    │   │   │   └── auth.guard.ts
    │   │   ├── _interceptors
    │   │   │   └── auth.interceptor.ts
    │   │   ├── _services
    │   │   │   ├── auth
    │   │   │   │   ├── auth-state.type.ts
    │   │   │   │   ├── auth.service.spec.ts
    │   │   │   │   └── auth.service.ts
    │   │   │   ├── markdown
    │   │   │   │   └── markdown.service.ts
    │   │   │   └── rest-backend
    │   │   │       ├── IdeaItem.ts
    │   │   │       ├── auth-request.type.ts
    │   │   │       ├── rest-backend.service.spec.ts
    │   │   │       └── rest-backend.service.ts
    │   │   ├── app.component.html
    │   │   ├── app.component.scss
    │   │   ├── app.component.spec.ts
    │   │   ├── app.component.ts
    │   │   ├── app.config.server.ts
    │   │   ├── app.config.ts
    │   │   ├── app.routes.ts
    │   │   ├── footer
    │   │   │   └── footer
    │   │   │       ├── footer.component.html
    │   │   │       ├── footer.component.scss
    │   │   │       ├── footer.component.spec.ts
    │   │   │       └── footer.component.ts
    │   │   ├── homepage
    │   │   │   ├── comment-section
    │   │   │   │   ├── comment-section.component.html
    │   │   │   │   ├── comment-section.component.scss
    │   │   │   │   ├── comment-section.component.spec.ts
    │   │   │   │   └── comment-section.component.ts
    │   │   │   ├── homepage
    │   │   │   │   ├── homepage.component.html
    │   │   │   │   ├── homepage.component.scss
    │   │   │   │   ├── homepage.component.spec.ts
    │   │   │   │   └── homepage.component.ts
    │   │   │   ├── idea-container
    │   │   │   │   ├── idea-container.component.html
    │   │   │   │   ├── idea-container.component.scss
    │   │   │   │   ├── idea-container.component.spec.ts
    │   │   │   │   └── idea-container.component.ts
    │   │   │   ├── idea-creation-form
    │   │   │   │   ├── idea-creation-form.component.html
    │   │   │   │   ├── idea-creation-form.component.scss
    │   │   │   │   ├── idea-creation-form.component.spec.ts
    │   │   │   │   └── idea-creation-form.component.ts
    │   │   │   └── profile
    │   │   │       └── profile
    │   │   │           ├── profile.component.html
    │   │   │           ├── profile.component.scss
    │   │   │           ├── profile.component.spec.ts
    │   │   │           └── profile.component.ts
    │   │   ├── login
    │   │   │   └── login
    │   │   │       ├── login.component.html
    │   │   │       ├── login.component.scss
    │   │   │       ├── login.component.spec.ts
    │   │   │       └── login.component.ts
    │   │   ├── navbar
    │   │   │   └── navbar
    │   │   │       ├── navbar.component.html
    │   │   │       ├── navbar.component.scss
    │   │   │       ├── navbar.component.spec.ts
    │   │   │       └── navbar.component.ts
    │   │   ├── signup
    │   │   │   └── signup
    │   │   │       ├── signup.component.html
    │   │   │       ├── signup.component.scss
    │   │   │       ├── signup.component.spec.ts
    │   │   │       └── signup.component.ts
    │   │   └── welcome-page
    │   │       └── welcome-page
    │   │           ├── welcome-page.component.html
    │   │           ├── welcome-page.component.scss
    │   │           ├── welcome-page.component.spec.ts
    │   │           └── welcome-page.component.ts
    │   ├── index.html
    │   ├── main.server.ts
    │   ├── main.ts
    │   └── styles.scss
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json

33 directories, 100 files
```






### Frontend (Angular Version 14.2.4)
**Technologies Used:**
- **Angular**: An open-source framework based on TypeScript for building web applications.

**Libraries and Components:**
- **Angular Material**: A UI component library for Angular, designed with Google's Material Design guidelines.
- **Tailwind CSS**: A utility-first CSS framework for quickly creating custom layouts and components using predefined classes.
- **Ngx-Toastr**: A library for displaying customizable notifications and alerts in Angular applications.

### Backend (Express Version 4.19.2)
**Technologies Used:**
- **Express**: A web application framework for Node.js that simplifies building server-side applications.
- **Node.js**: A JavaScript runtime based on Chrome's V8 engine.
- **Swagger**: A framework for designing, building, and documenting RESTful APIs.

**Utilities:**
- **Dotenv**: Manages environment variables for Node.js applications.
- **JsonWebToken (JWT)**: Generates and verifies JSON Web Tokens for authentication and authorization.
- **Cors**: Configures cross-origin requests in Express applications.

### Database
- **SQLite 3**: A lightweight relational database management system that uses simple database files to store data.
- **Sequelize**: An ORM (Object-Relational Mapping) for Node.js that simplifies interaction with the SQLite database, enabling CRUD operations and managing table relationships.

### Containerization (Docker Version 24.0.7)
To streamline the deployment process, Docker is used. Below is the port mapping for the application:  
| Component | Internal Port | External Port |
|-----------|---------------|---------------|
| Frontend  | 4200          | 80            |
| Backend   | 3000          | 3000          |

### Available Paths
- **Website**: [http://localhost:80/](http://localhost:80/)  
- **Server**: [http://localhost:3000/](http://localhost:3000/)

---

## Prerequisites
- **Docker**
- **Docker Compose**

## Download
To download the HiveMind project, run the following command:
```sh
git clone https://github.com/terrecruis/Project-HiveMind
```

## Launch
Navigate to the project directory and launch the application using Docker Compose:
```sh
docker-compose up --build
```

## Summary

HiveMind is a modern web application that combines cutting-edge technologies to provide a seamless user experience for managing and visualizing dynamic data.  

The **frontend** is built using Angular, ensuring a responsive and visually appealing interface, enhanced with libraries like Angular Material and Tailwind CSS for streamlined design and functionality. Notifications and alerts are handled effectively using ngx-toastr.

The **backend**, powered by Express and Node.js, ensures robust server-side functionality, including secure authentication and API documentation through JWT and Swagger. The integration of SQLite 3 and Sequelize offers a reliable and efficient data management solution.

To simplify deployment, **Docker** is utilized for containerization, providing an easily replicable setup that guarantees consistent behavior across environments. The application’s architecture makes it scalable, maintainable, and well-suited for real-world usage.

HiveMind is a versatile tool, combining the best of modern web development practices to deliver a powerful, user-friendly platform.


