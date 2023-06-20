import searchIcon from "../../imagesNav/searchIcon.svg"
import { Grid } from "@mui/material"
import "./searchPanel.css"
import { useState } from "react"

export default function SearchPanel({ setFilterText }) {
	const [inputValue, setInputValue] = useState("")
	const inputChange = (event) => {
		setInputValue(event.target.value)
		setFilterText(event.target.value)
	}
	return (
		<Grid container className="searchPanel">
			<Grid item xs={1}>
				<img src={searchIcon} alt="" />
			</Grid>
			<Grid item xs={11}>
				<input
					type="text"
					placeholder="Поиск"
					value={inputValue}
					onChange={inputChange}
				/>
			</Grid>
		</Grid>
	)
}
