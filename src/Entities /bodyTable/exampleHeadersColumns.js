import "./columnsStyle.css"

let columns = [
	{
		headerName: "№",
		field: "id",
		width: "80px"
	},
	{
		headerName: "Имя сотрудника",
		field: "name",
		filter: true,
		width: "150px",
		cellClassRules: {
			namePerson: (params) => {
				const expirationDate = params.value
				return expirationDate
			}
		}
	},
	{
		headerName: "Основная информация",
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
	},
	{
		headerName: "Банковская информация",
		children: [
			{ headerName: "Банк", field: "bankInfo.bank" },
			{ headerName: "Номер карты", field: "bankInfo.cardNumber" }
		]
	},
	{
		headerName: "Документы сотрудника",
		children: [
			{ headerName: "Гражданство", field: "documentInfo.citizenship" },
			{ headerName: "Паспорт", field: "documentInfo.passport" },
			{ headerName: "Кем выдан", field: "documentInfo.issuedBy" },
			{
				headerName: "Срок действия",
				field: "documentInfo.expirationDate",
				cellClassRules: {
					"expired-cell": (params) => {
						const expirationDate = new Date(params.value)
						const year = expirationDate.getFullYear()
						return year < 2024
					}
				}
			},
			{
				headerName: "Место проживания",
				field: "documentInfo.residenceAddress"
			},
			{
				headerName: "Адрес прописки",
				field: "documentInfo.registrationAddress"
			},
			{ headerName: "Патент", field: "documentInfo.patent" },
			{
				headerName: "Срок действия патента",
				field: "documentInfo.patentExpirationDate"
			},
			{ headerName: "СНИЛС", field: "documentInfo.snils" },
			{ headerName: "ИНН", field: "documentInfo.inn" },
			{ headerName: "Мед. книжка", field: "documentInfo.medicalBook" }
		]
	},
	{
		headerName: "Информация от HR",
		children: [
			{ headerName: "Должность", field: "hrInfo.position" },
			{ headerName: "Подразделение", field: "hrInfo.department" },
			{ headerName: "Решение", field: "hrInfo.decision" },
			{ headerName: "Источник", field: "hrInfo.source" },
			{ headerName: "Дата", field: "hrInfo.date" },
			{ headerName: "Примечание", field: "hrInfo.note" }
		]
	}
]

export default columns
