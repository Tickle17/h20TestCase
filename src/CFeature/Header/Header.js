import { Grid } from "@mui/material"
import "./Header.css"
import HeaderNavBar from "../../Entities /Header/headerNavBar/HeaderNavBar"
import HeaderProfile from "../../Entities /Header/HeaderProfile/HeaderProfile"

export default function Header() {
	return (
		<Grid className="header">
			<Grid container alignItems="center" justifyContent="center">
				<Grid item xs={8}>
					<HeaderNavBar></HeaderNavBar>
				</Grid>
				<Grid item xs={1}></Grid>
				<Grid item xs={3}>
					<HeaderProfile></HeaderProfile>
				</Grid>
			</Grid>
		</Grid>
	)
}
