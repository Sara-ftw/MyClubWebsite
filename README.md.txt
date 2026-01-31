# Start backend
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
python manage.py runserver

# Start frontend
cd frontend
npm run dev

# Access points
Frontend: http://localhost:8080
Backend API: http://localhost:8000/api/registrations/
Admin Panel: http://localhost:8000/admin