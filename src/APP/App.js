import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavMenu from "../CFeature/navMenu/navMenu"
import Header from "../CFeature/Header/Header"
import { Grid } from "@mui/material"
import Contacts from "../BPAGES/Contacts/Contacts"

function App() {
	return (
		<div className="App">
			<Router basename="/">
				<div className="mainBG">
					<Grid container>
						<Grid item xs={1}>
							<NavMenu></NavMenu>
						</Grid>
						<Grid item xs={11} className="mainHeaderBG">
							<Header></Header>
							<Grid className="mainBodyBG">
								<Routes>
									<Route path="/" element={<></>} />
									<Route
										path="/contacts/allBaseWorkers"
										element={<Contacts></Contacts>}
									/>
									<Route path="baseWorkers" element={<></>} />
									<Route
										path="CalendarWorkers"
										element={<></>}
									/>
									<Route
										path="otherWorkers"
										element={<></>}
									/>
								</Routes>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</Router>
		</div>
	)
}

export default App
