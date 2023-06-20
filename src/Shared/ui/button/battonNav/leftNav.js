import "./battonNav.css"
import vector from "../../imagesNav/Vector_left.png"
import { Grid } from "@mui/material"

export default function LeftNav({ prevNavigate }) {
	return (
		<Grid item xs={6}>
			<button className="buttonNav" onClick={prevNavigate}>
				<img src={vector} alt="" />
			</button>
		</Grid>
	)
}
