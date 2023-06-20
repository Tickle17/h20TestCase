import React, { useState, useRef, useEffect, useMemo, useCallback } from "react"
import { AgGridReact } from "ag-grid-react"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import "./bodyStyle.css"
import data from "./exampleData"
import columns from "./exampleHeadersColumns"
import { Grid } from "@mui/material"

const ContactSheet = ({ setRowsSize, rowsSize, filterText }) => {
	const gridRef = useRef() //подключаем возможность изменения ad-grid
	const [rowData, setRowData] = useState() //список строк

	const [columnDefs, setColumnDefs] = useState()

	const defaultColDef = useMemo(
		() => ({
			sortable: true,
			filter: true
		}),
		[]
	)

	useEffect(() => {
		setRowData(data)
		setColumnDefs(columns)
	}, [rowsSize])

	const rowStyle = { background: "rgba(248, 248, 248, 0.5)" } //стиль для четных
	const getRowStyle = (params) => {
		if (params.node.rowIndex % 2 === 0) {
			return { background: "rgba(229, 248, 246, 0.5)" } //стиль для нечетных строк
		}
	}
	//работа с стейтами пагинации
	const [currentPage, setCurrentPage] = useState(0)
	const [pageSize, setPageSize] = useState(0)
	const [showedRows, setShowedRows] = useState(0)
	const [totalPages, setTotalPages] = useState(0)
	//поиск
	useEffect(() => {
		if (filterText !== "") {
			if (gridRef.current && gridRef.current.api) {
				gridRef.current.api.setQuickFilter(filterText)
			}
		} else {
			if (gridRef.current && gridRef.current.api) {
				gridRef.current.api.setQuickFilter(null) // сброс фильтра
			}
		}
	}, [filterText])

	const onPaginationChanged = useCallback(() => {
		if (gridRef.current.api) {
			setCurrentPage(gridRef.current.api.paginationGetCurrentPage() + 1)
			setPageSize(gridRef.current.api.paginationGetPageSize())
			setRowsSize(gridRef.current.api.paginationGetRowCount())
			setTotalPages(gridRef.current.api.paginationGetTotalPages())
		}
	}, [gridRef, setRowsSize])
	//записываем кол-во отображаемых элементов
	useEffect(() => {
		setShowedRows(() => {
			if (currentPage * pageSize > rowsSize) {
				return rowsSize
			}
			return currentPage * pageSize
		})
	}, [currentPage, pageSize, rowsSize])
	//стиль таблицы
	const containerStyle = useMemo(
		() => ({
			width: "100%",
			height: 420
		}),
		[]
	)
	return (
		<div>
			<div className="ag-theme-alpine" style={containerStyle}>
				<AgGridReact
					ref={gridRef}
					rowData={rowData}
					rowStyle={rowStyle}
					getRowStyle={getRowStyle}
					columnDefs={columnDefs}
					defaultColDef={defaultColDef}
					suppressColumnVirtualisation={true}
					suppressRowVirtualisation={true}
					suppressPaginationPanel={true} // убираем стандартную пагинацию
					paginationPageSize={10}
					pagination={true}
					onPaginationChanged={onPaginationChanged}
					alwaysShowHorizontalScroll={true}
					alwaysShowVerticalScroll={true}
				/>
			</div>
			<Grid container alignItems="center" className="paginationMenu">
				<Grid item xs={4}>
					<div>{`показано ${showedRows} из ${rowsSize} результатов`}</div>
				</Grid>
				<Grid container item xs={4}>
					<Stack spacing={2}>
						<Pagination
							count={totalPages}
							onChange={(event, page) => {
								gridRef.current.api.paginationGoToPage(page - 1)
							}}
						/>
					</Stack>
				</Grid>
				<Grid item xs={4}>
					отображать на странице
					<select
						onChange={(event) => {
							gridRef.current.api.paginationSetPageSize(
								event.target.value
							)
						}}>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
						<option value="1000">100</option>
					</select>
				</Grid>
			</Grid>
		</div>
	)
}

export default ContactSheet
