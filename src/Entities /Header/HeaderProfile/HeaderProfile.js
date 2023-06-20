import { Grid } from "@mui/material"
import "./HeaderProfile.css"
import Profile from "../../../Shared/ui/imagesNav/ProfileImg.png"
import openMenu from "../../../Shared/ui/imagesNav/vector_bottom.svg"

export default function HeaderProfile() {
	return (
		<Grid container className="headerProfile">
			<Grid item xs={2}>
				<img src={Profile} alt="headerProfile__profileimg" />
			</Grid>
			<Grid item xs={7}>
				<Grid className="headerProfile__name">
					<b>Kristina 🐰 </b>
				</Grid>
				<Grid className="headerProfile__role">менеджер продаж</Grid>
			</Grid>
			<Grid item xs={1}>
				<button>
					<img src={openMenu} alt="openMenu" />
				</button>
			</Grid>
		</Grid>
	)
}
