import "./battonNav.css"
import vector from "../../imagesNav/Vector_right.png"
import { Grid } from "@mui/material"

export default function RightNav({ nextNavigate }) {
	return (
		<Grid item xs={6}>
			<button className="buttonNav" onClick={nextNavigate}>
				<img src={vector} alt="" />
			</button>
		</Grid>
	)
}
