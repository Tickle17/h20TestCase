import { Grid } from "@mui/material"
import "./Contacts.css"
import SearchPanel from "../../Shared/ui/button/searchPanel/searchPanel"
import EditButton from "../../Shared/ui/button/editButton/editButton"
import { useState } from "react"
import ContactSheet from "../../Entities /bodyTable/body"

export default function Contacts() {
	const [rowsSize, setRowsSize] = useState(0)
	const [filterText, setFilterText] = useState("") // Состояние для текста фильтра
	return (
		<Grid className="contactsBG">
			<Grid style={{ fontSize: "23px" }}>
				<b>Общая база сотрудников</b>
			</Grid>
			<Grid container className="searchBar" alignItems="center">
				<Grid item xs={2}>
					<Grid
						container
						alignItems="center"
						className="searchBar__totalContacts">
						<Grid
							item
							xs={4}
							style={{
								color: "rgba(84, 211, 194, 1)",
								fontSize: "28px",
								justifyContent: "space-evenly",
								display: "flex",
								fontWeight: 600
							}}>
							{rowsSize}
						</Grid>
						<Grid item xs={8}>
							<p> Контактов</p>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					container
					item
					xs={10}
					justifyContent="space-between"
					className="searchBar__panel&edit">
					<Grid item xs={4}>
						<SearchPanel
							setFilterText={setFilterText}
							filterText={filterText}></SearchPanel>
					</Grid>
					<Grid item xs={8}>
						<EditButton></EditButton>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<ContactSheet
					setRowsSize={setRowsSize}
					rowsSize={rowsSize}
					filterText={filterText}></ContactSheet>
			</Grid>
		</Grid>
	)
}
