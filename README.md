Frontend Development Challenge
**Description**
This repository contains the solution to the frontend development challenge, built with Angular. The app allows users to log and visualize workout data, showing analytics like types of workouts and their duration.

**Setup**
To run this project locally, follow these steps:

Clone the repository: git clone https://github.com/Teja-Srinivas509/Workouts.git
Install Dependencies: Install all the necessary dependencies required for the Angular project by running: npm install
Run the Angular Application: Once the dependencies are installed, you can start the Angular development server: npm start
Open the Application in Your Browser: After running the npm start command, the Angular development server will start. Open your browser and go to: http://localhost:4200
Optional: Build the Project for Production (if needed) If you need to build the project for production, use: npm run build
##Components overview

**workout-form Component** Purpose: The workout-form component allows users to enter their workout details such as the type of workout and the duration (in minutes). It acts as a form where users can submit their workout data. Key Features: Input fields for workout type and minutes. Validations to ensure valid data is entered. Saves entered data to local storage for future use. Usage: The component is used in the main app where users can log new workout data. After submission, the form resets and the data is stored in localStorage.

**display-workout Component** Purpose: The display-workout component displays a list of all previously entered workouts. It fetches data from localStorage and shows a summary of each workout, including type and duration. Key Features: Displays the list of workouts stored in localStorage. Allows users to view their workout history. Provides a button to view detailed workout analysis. Usage: This component is typically used to show users a list of their past workout entries. It is displayed after the user successfully logs a new workout through the workout-form component.

**analysis Component Purpose:** The analysis component displays a visual representation of the workout data in a chart format. It uses the Chart.js library to display workouts per type and their respective durations. Key Features: Displays a bar chart to visualize the workout data. Users can click on a workout in the list, and the chart will update to reflect that user's specific data. Data is fetched from localStorage for the current user's workouts. Usage: This component is used to analyze the workout data of individual users. Upon clicking a user in the display-workout component, their workout data is passed to the analysis component for visualization. The chart updates dynamically based on the selected user.


View the app her https://tranquil-forest-23600-43fd78d68876.herokuapp.com/
