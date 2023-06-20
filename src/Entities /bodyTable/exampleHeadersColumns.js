let columns = [
	{
		headerName: "№",
		field: "id",
		width: "60px"
	},
	{
		headerName: "Имя сотрудника",
		field: "name",
		filter: true,
		width: "150px"
	},
	{
		headerName: "Основная информация",
		cellStyle: { border: "20px solid" },
		children: [
			{ headerName: "ID номер", field: "basicInfo.idNumber" },
			{ headerName: "Телефон", field: "basicInfo.phone" },
			{
				headerName: "Пол",
				field: "basicInfo.gender",
				filter: true
			},
			{
				headerName: "Дата рождения",
				field: "basicInfo.birthDate"
			},
			{
				headerName: "Метро",
				field: "basicInfo.metro",
				filter: true
			},
			{
				headerName: "Адрес проживания",
				field: "basicInfo.address"
			}
		]
	}
]
export default columns
