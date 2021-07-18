# Progress Tracker

## The Challenge
The SGO Collective Consciousness needs a tool that will allow easy visualization of their students' progress. The tool will help in quantitative analysis of their curriculum for each student. Insights gained from the data will allow the organization to modify their curriculum and activities, based on the students' engagement and performance.


## Our Solution
We have created a solution for the benefit of Devi initiative facilitators. It contains dashboards to visualize the progress of each student. We also provide metrics to measure aggregate student performance, which can be used to identify common areas of difficulty/weakness. 
The facilitators can also see the common topics or questions in which majority of the students are facing diffculty in. These insights will help the organization modify their course content accordingly.


## Tech/framework used
The following tools were used in building this site
* Front-end development
  * React.js
  * BootStrap 
  
* Back-end development
  * Node.js
  * Express
  * Django
  
* Database used
  * Mongodb

* Graphical tools
  * Chart.js
    
* NLP library
   * stopwords
   
* Authorisation/Authentication
  * JWT
  
## Installation
It is very easy to use install our project if anyone wants. Just follow the steps :

1. Firstly clone our project's GitHub repository to your desktop 

2. Open command line navigate to the project folder. Then type the following commands twice (once in project/client folder and once in project/server) to install required dependencies :
     ```javascript
     npm install
     ```
  
 3. Your package.json inside client folder should look like this with the following dependencies
   ```javascript
    "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.1",
    "chart.js": "^3.4.1",
    "concurrently": "^6.2.0",
    "react": "^17.0.2",
    "react-chartjs-2": "^3.0.3",
    "react-dom": "^17.0.2",
    "react-google-login": "^5.2.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-transition-group": "^4.4.2",
    "react-wordcloud": "^1.2.7",
    "web-vitals": "^1.1.2"
  }
   ```    
  4. Your package.json inside server folder should look like this with the following dependencies
      ```javascript
         "dependencies": {
         "bcryptjs": "^2.4.3",
         "config": "^3.3.6",
         "cors": "^2.8.5",
         "express": "^4.17.1",
         "express-fileupload": "^1.2.1",
         "express-validator": "^6.11.1",
         "jsonwebtoken": "^8.5.1",
         "mongoose": "^5.12.13",
         "node-fetch": "^2.6.1"
       }
      ```    
   

     
5. After successful installation run the following command inside client folder to start the application :
      ```javascript
       npm run dev
      ```
   If you see *Server Has Started!!* then you have successfully setup everything and good to go with our application.
