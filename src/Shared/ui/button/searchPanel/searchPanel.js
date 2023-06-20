import searchIcon from "../../imagesNav/searchIcon.svg"
import { Grid } from "@mui/material"
import "./searchPanel.css"

export default function SearchPanel({ setFilterText, filterText }) {
	return (
		<Grid container className="searchPanel">
			<Grid item xs={1}>
				<img src={searchIcon} alt="" />
			</Grid>
			<Grid item xs={11}>
				<input
					type="text"
					placeholder="Поиск"
					value={filterText}
					onChange={(event) => {
						setFilterText(event.target.value)
					}}
				/>
			</Grid>
		</Grid>
	)
}
