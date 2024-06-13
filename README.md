# Express.js Basic HTTP Server

This repository contains a basic example of creating an HTTP server using Express.js, demonstrating simple routes to calculate the sum of 'n' natural numbers and the sum of two numbers based on user input. Future updates will include a comprehensive project on Express.js.

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Sahilll94/Intro-to-Express.js.git
    ```

2. Navigate to the project directory:

    ```bash
    cd express-basic-server
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Server

Start the Express server by running the following command in the project directory:

```bash
node app.js

The server will start on port 3004. You can access the endpoints via your web browser or any HTTP client (like Postman or curl).

### Available Endpoints

1. **Sum of 'n' Natural Numbers**

    ```http
    GET /SumOfN?n=<number>
    ```

    Example:

    ```Chrome
    http://localhost:3004/SumOfN?n=30
    ```

2. **Sum of Two Numbers**

    ```http
    GET /SumOfTwoNumbers?a=<number>&b=<number>
    ```

    Example:

    ```Chrome
    http://localhost:3004/SumOfTwoNumbers?a=30&b=40
    ```

### Future Updates

Stay tuned for future updates where a comprehensive project on Express.js will be added.
