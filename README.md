# Transactify

Transactify is an Angular-based application designed to retrieve customer and transaction data from a provided API endpoint and display it in a user-friendly format. This project showcases essential features such as filtering and data visualization using a charting library.

Website: https://transactify-project.vercel.app/

## Features

- **Customer and Transaction Table:** Displays a list of customers along with their transaction data.
- **Filtering:** Allows filtering of the table by customer name or transaction amount.
- **Transaction Graph:** Displays the total transaction amount per day for a selected customer.

## Requirements

- **Framework:** The project is built using Angular, a modern JavaScript framework.
- **Charting Library:** Utilizes a charting library to display the transaction graph.
- **Local Server:** A local server is set up to host the JSON data.
- **Data API:** Uses the provided data as an API. The transaction dataset JSON can be extended with additional data for demonstration purposes.
- **GitHub:** The project is hosted on a GitHub repository with GitHub Pages enabled to host the application.

## Getting Started

### Prerequisites

- Node.js
- Angular CLI

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/transactify.git
   cd transactify
   
2. Install dependencies:
   ```sh
   npm install
   
3. Run the Angular development server:
   ```sh
   npm start

## Usage

### Filtering Data

- Use the filter bar at the top of the table to filter customers by name or transaction amount.
- Reset the filters using the "Reset Data" button.

### Viewing Transaction Graph

- Click on "Display Chart" next to a customer to view the graph of total transaction amounts per day.

## License

This project is licensed under the MIT License.

## Acknowledgements

- **Angular** for providing the framework.
- **Chart.js** (or any other charting library used) for data visualization.
- **JSON Server** for easy local API setup.
