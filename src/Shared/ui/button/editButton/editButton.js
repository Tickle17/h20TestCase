import "./editButton.css"
import { Grid } from "@mui/material"

export default function EditButton() {
	return (
		<Grid justifyContent="flex-end" style={{ display: "flex" }}>
			<button className="editButton">Режим редактирования</button>
		</Grid>
	)
}
