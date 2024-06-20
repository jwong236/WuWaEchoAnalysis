# WuWaEchoAnalysis

## Setup

To set up and run the project, you need to open two terminal shells: one for the frontend and one for the backend.

0. Virtual environment (optional)

   - Create a virtual environment:
     ```
     python -m venv venv
     ```
   - Activate the virtual environment:
     ```
     source venv/bin/activate
     ```

1. First Shell (Frontend)

   - Navigate to the `frontend` directory:
     ```
     cd frontend
     ```
   - Install frontend dependencies:
     ```
     npm install
     ```
   - Start the frontend development server:
     ```
     npm run dev
     ```

2. Second Shell (Backend)
   - Navigate to the `backend` directory:
     ```
     cd backend
     ```
   - Install the backend dependencies:
     ```
     pip install -r requirements.txt
     ```
   - Start the Flask server:
     ```
     flask run
     ```
