import { NavLink } from "react-router-dom"
import logo from "../../Shared/ui/imagesNav/Logo.png"
import calendar from "../../Shared/ui/imagesNav/Calendar.png"
import tasks from "../../Shared/ui/imagesNav/Tasks.png"
import archive from "../../Shared/ui/imagesNav/Archive.png"
import contacts from "../../Shared/ui/imagesNav/Contacts.png"
import money from "../../Shared/ui/imagesNav/Money.png"
import circle_value from "../../Shared/ui/imagesNav/Circle_value.png"
import settings from "../../Shared/ui/imagesNav/Settings.png"
import { Grid } from "@mui/material"
import "./navMenu.css"

export default function NavMenu() {
	return (
		<Grid container>
			<Grid item xs={12} className="navMenu_logo">
				<NavLink to="/">
					<img src={logo} alt="Home" />
				</NavLink>
			</Grid>
			<Grid item xs={12} className="navMenu_item">
				<NavLink to="/calendar" className="navMenu_item_active">
					<img src={calendar} alt="calendar" />
				</NavLink>
			</Grid>
			<Grid item xs={12} className="navMenu_item">
				<NavLink to="/tasks" className="navMenu_item_active">
					<img src={tasks} alt="tasks" />
				</NavLink>
			</Grid>
			<Grid item xs={12} className="navMenu_item">
				<NavLink to="/archive" className="navMenu_item_active">
					<img src={archive} alt="archive" />
				</NavLink>
			</Grid>
			<Grid item xs={12} className="navMenu_item">
				<NavLink to="/contacts" className="navMenu_item_active">
					<img src={contacts} alt="contacts" />
				</NavLink>
			</Grid>
			<Grid item xs={12} className="navMenu_item">
				<NavLink to="/money" className="navMenu_item_active">
					<img src={money} alt="money" />
				</NavLink>
			</Grid>
			<Grid item xs={12} className="navMenu_item">
				<NavLink to="/circle_value" className="navMenu_item_active">
					<img src={circle_value} alt="circle_value" />
				</NavLink>
			</Grid>
			<Grid item xs={12} className="navMenu_item">
				<NavLink to="/settings" className="navMenu_item_active">
					<img src={settings} alt="settings" />
				</NavLink>
			</Grid>
		</Grid>
	)
}
