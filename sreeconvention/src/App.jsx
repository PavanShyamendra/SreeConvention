import './App.css'
import React from 'react'

import { Routes, Route } from 'react-router-dom'

import HomeScreen from './pages/home'
import CalendarPage from './pages/calendar'


export default function App() {
  return (
    <>
      <Routes>
        <Route exact element = {<HomeScreen/>} path ="/"/>
        <Route element={<CalendarPage />} path="/calendar" />
      </Routes>
      </>
  )
}