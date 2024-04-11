import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';

import Forgot from './pages/Forgot.jsx';
import Reset from './pages/Reset.jsx';
import WelcomePage from './pages/WelcomePage.jsx';
import NotesApp from './pages/NotesApp.jsx';
import Todo from './pages/Todo.jsx';
import ViewTodo from './pages/ViewTodo.jsx';
// import ViewNotes from './pages/ViewNotes.jsx';
import Reminder from './pages/Reminder.jsx';
import ViewNotes from './pages/ViewNotes.jsx';
import ViewReminder from './pages/ViewReminder.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Signup /> } />
      <Route path='/login' element={<Login /> } />
      <Route path='/forgot' element={<Forgot /> } />
      <Route path='/reset' element={<Reset /> } />
      <Route path='/welcomepage' element={<WelcomePage /> } />
      <Route path='/welcomepage/todo' element={<Todo /> } />
      <Route path='/welcomepage/viewtodo' element={<ViewTodo /> } />
      <Route path='/welcomepage/notesapp' element={<NotesApp /> } />
      <Route path='/welcomepage/viewnotes' element={<ViewNotes /> } />
      <Route path='/welcomepage/reminder' element={<Reminder /> } />
      <Route path='/welcomepage/viewreminder' element={<ViewReminder /> } />
     
      
    </Route>
 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
