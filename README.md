# TanStack React Data Table

This project is an advanced data table web application built using React JS styled by Tailwind CSS. It offers various features for viewing, filtering, sorting, and managing data effectively.

## Features

1. **View/Hide Columns**: Users can toggle the visibility of columns according to their preferences.

2. **Sort**: Columns can be sorted in ascending or descending order.

3. **Filtering Table Rows**:
    - **Global Search**: Search and filter overall data in the table using a search bar available at the top right.
    - **Fuzzy Search**: Search and filter rows based on a specific column using fuzzy search for `name`.
    - **Multi-Select Dropdown Filter**: Users can filter data based on exact matches and generate facets for `category` and `subcategory`.
    - **Range Filter**: Filter numeric and date columns using a slider for `price` and a date range picker for `createdAt` and `updatedAt`.
    
4. **Grouping Column Data**: Data can be grouped based on `category` and `subcategory` with a side panel.

5. **Pagination**: Results are paginated with 10 results per page.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. Open your web browser and navigate to `http://localhost:5173/` (or the appropriate port if specified).

## Dependencies

This project is based on Tanstack React Table. Ensure that the following dependencies are installed:

- Tanstack React Table: [Link to Documentation](https://tanstack.com/)

Please refer to the documentation for detailed instructions on implementing specific features.

## Deployment

The project is deployed using Netlify: [Live Demo](https://tanstack-react-table-task.netlify.app/)
