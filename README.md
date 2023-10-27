# Bounce Insights Software Engineer Intern Coding Challenge

## Backend

### 1. Express and Node.js
The backend of this application is built using Express.js, a Node.js web application framework. Express is used to handle routing, HTTP requests, and communicate with the REST Countries API to fetch country information.

In this project, I have set up two APIs:

1. **host/all**: This API is used to retrieve information about all countries, providing data for every country available.
2. **host/name/{country-name}**: This API allows you to fetch information about a specific country by providing its name. You can query details for a particular country using this endpoint.

These APIs serve as the core of the application, providing data for both all countries and specific country details, enhancing the user experience and information retrieval capabilities.

### 2. CORS

This is a front-end and back-end separation project. Because the back-end's port might face cross-origin issues when making requests to the external API (https://restcountries.com/#endpoints-name), I have used the Node.js package called "cors" to address these cross-origin concerns. This package enables both the front-end and back-end to communicate and access each other's resources without encountering cross-origin restrictions, ensuring smooth and secure interactions between the two components.

## Frontend

### 1. Design UI
The frontend is developed using React, a popular JavaScript library for building user interfaces. The UI is designed to provide a user-friendly interface where users can input a country name to retrieve information.

1. Due to the simplicity of the functionality, I opted for a flat design, reducing clutter, and incorporating a thematic color scheme. By using flat design principles and thematic colors, we ensure a clear and intuitive interface, which is particularly effective for straightforward tasks. It's a design choice that not only enhances usability but also aligns with the brand's visual identity, promoting recognition and a sense of unity.

![img](file:///Users/clement/Documents/%E6%88%AA%E5%9B%BE/Screenshot%202023-10-27%20at%2011.50.29.png)

2. Information is displayed in a card format only after the user inputs a search query, ensuring a straightforward and direct means of conveying data.

   ![img](file:///Users/clement/Documents/%E6%88%AA%E5%9B%BE/Screenshot%202023-10-27%20at%2011.55.18.png)

   3. Mobile adaptation

      I adapted the application for mobile devices, and the cards are displayed vertically for easy scrolling.

      <img src="file:///Users/clement/Documents/%E6%88%AA%E5%9B%BE/Screenshot%202023-10-27%20at%2012.17.27.png" alt="img" style="zoom:30%;" /> 

      

### 2. UI Library

I have chosen to use MUI, a powerful and versatile UI library, to enhance the user experience and streamline the visual design. MUI simplifies development by providing a wide range of ready-to-use components, allowing for structured and clean code organization while building user interfaces.

![img](file:///Users/clement/Documents/%E6%88%AA%E5%9B%BE/Screenshot%202023-10-27%20at%2011.59.19.png)

### 3. Country selection and JSON parsing

After analyzing the returned JSON format, I discovered that the API supports fuzzy matching, which can result in multiple countries. As a response, I implemented a country selection feature, so when a user clicks on a flag, it automatically switches to the selected country and region. This provides users with more options and convenience.

### 3. Navigation

The page offers navigation functionality. When you select a different country's flag and click the navigation button, it will take you to the Google Maps page for that country, adding this feature for users.

![image-20231027120411140](/Users/clement/Library/Application Support/typora-user-images/image-20231027120411140.png)

### 4. Cards Display
Utilizing the CARD module for unified rendering and centralized data management enhances modularity and extensibility. For instance, adding new information will automatically result in an additional card. This modular approach accommodates flexible layout adjustments, and the card presentation ensures clear and aesthetically pleasing information display.

## Deployment

### 1. Google Cloud
The application is deployed on the Google Cloud platform to ensure accessibility and scalability. Google Cloud provides a reliable and robust hosting environment for the backend and frontend.

### 2. Docker
Docker is used for containerization, allowing for easy deployment and scaling of the application components. Docker containers help maintain consistency and portability across different environments.

Since this web application is relatively simple, I deployed it using a Dockerfile without utilizing Docker Compose or container orchestration.

``` dockerfile
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3001
CMD [ "node", "app.js" ]          
```

