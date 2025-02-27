import { useState, useEffect } from "react"
import { Link, Route, Routes } from "react-router-dom"
import "./styles.css"

import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  async function getPeople() {
    const response = await fetch('https://randomuser.me/api/?results=50')
    const json = await response.json()
    setPeople([...json.results])
  }

  useEffect(() => {
    getPeople()
  },[])

  return (
    <div className="App">
      <header>  
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people} />} />
        <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} people={people} setPeople={setPeople} />} />
      </Routes>

    </div>
  )
}
