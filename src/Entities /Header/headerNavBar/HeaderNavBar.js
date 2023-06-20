import { Grid } from "@mui/material"
import { NavLink, useLocation } from "react-router-dom"
import LeftNav from "../../../Shared/ui/button/battonNav/leftNav"
import RightNav from "../../../Shared/ui/button/battonNav/rightNav"
import "./HeaderNavBar.css"
import { useState } from "react"

export default function HeaderNavBar() {
	const location = useLocation()
	const menuItems = [
		{ label: "База анкет сотрудников", path: "/contacts/base" },
		{ label: "Общая база сотрудников", path: "/contacts/allBaseWorkers" },
		{ label: "База сотрудников", path: "/contacts/baseWorkers" },
		{ label: "Календарь сотрудников", path: "/contacts/CalendarWorkers" },
		{ label: "Что-то еще про сотрудников", path: "/contacts/otherWorkers" }
	]
	const [startIndex, setStartIndex] = useState(0)

	const prevNavigate = () => {
		setStartIndex((prevIndex) => Math.max(0, prevIndex - 1))
	}

	const nextNavigate = () => {
		setStartIndex((prevIndex) =>
			Math.min(menuItems.length - 4, prevIndex + 1)
		)
	}

	return location.pathname.startsWith("/contacts") ? (
		<Grid
			container
			alignItems="center"
			justifyContent="center"
			className="HeaderNavBar">
			<Grid item xs={2} spacing={2} className="navButtonsFlex">
				<Grid item xs={4} className="navButtonsFlex left">
					<LeftNav prevNavigate={prevNavigate}></LeftNav>
				</Grid>
				<Grid item xs={8} className="navButtonsFlex right">
					<RightNav nextNavigate={nextNavigate}></RightNav>
				</Grid>
			</Grid>
			<Grid container item xs={10} className="navMenu">
				{menuItems.slice(startIndex, startIndex + 4).map((menuItem) => (
					<Grid item xs={3} className="navMenu_navItem">
						<NavLink
							key={menuItem.path}
							to={menuItem.path}
							className={
								location.pathname === menuItem.path
									? "active"
									: ""
							}>
							{menuItem.label}
						</NavLink>
					</Grid>
				))}
			</Grid>
		</Grid>
	) : (
		<div>Другое меню</div>
	)
}
