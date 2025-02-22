# Pet Management System
basic CRUD Operations using spring boot and react

## Prerequisites
- **Java JDK 21** (Make sure you have it installed)
- **MySQL** (For database)
- **Maven** (For backend)
- **Node.js & npm** (For frontend)

## 1. Setup Database in MySQL

1. Open MySQL and create the database:
   ```sql
   CREATE DATABASE pet_db;
   ```
2. Switch to the database:
   ```sql
   USE pet_db;
   ```
3. Create the `pets` table:
   ```sql
   CREATE TABLE pets (
       id BIGINT NOT NULL AUTO_INCREMENT,
       name VARCHAR(255) NOT NULL,
       disease VARCHAR(255),
       age INT,
       gender VARCHAR(255),
       species VARCHAR(255),
       PRIMARY KEY (id)
   );
   ```

---

## 2. Configure Backend (Spring Boot)

1. Open `pet/src/main/resources/application.properties` and update the MySQL password:
   ```properties
   spring.datasource.password={your_mysql_password}
   ```

2. Navigate to the backend directory:
   ```sh
   cd pet
   ```

3. Start the backend server:
   ```sh
   mvn spring-boot:run
   ```
   The backend APIs will be available at: [http://localhost:8080/api/](http://localhost:8080/api/)

---

## 3. Setup Frontend (React)

1. Open a new terminal and navigate to the frontend directory:
   ```sh
   cd pet-frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend server:
   ```sh
   npm run dev
   ```
   The frontend will be available at: [http://localhost:5173/](http://localhost:5173/)

---

## 4. Running the Project
- **Ensure MySQL is running**
- **Start the backend first**, then the frontend
- Access APIs at: [http://localhost:8080/api/](http://localhost:8080/api/)
- Open the UI at: [http://localhost:5173/](http://localhost:5173/)

