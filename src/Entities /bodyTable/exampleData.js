let data = [
	{
		id: 1,
		name: "John Doe",
		basicInfo: {
			idNumber: "123456",
			phone: "123-456-7890",
			gender: "Male",
			birthDate: "1990-01-01",
			metro: "Metro Station",
			address: "123 Main St"
		},
		bankInfo: {
			bank: "Bank Name",
			cardNumber: "1234-5678-9012-3456"
		},
		documents: {
			citizenship: "Country",
			passport: "Passport Number",
			issuedBy: "Issuer",
			expirationDate: "2022-01-12",
			residenceAddress: "Residence Address",
			registrationAddress: "Registration Address",
			patent: "Patent Number",
			patentExpiration: "2023-01-01",
			snils: "123-456-789 00",
			inn: "1234567890",
			medicalBook: "Medical Book Number"
		},
		hrInfo: {
			position: "Position",
			department: "Department",
			decision: "Decision",
			source: "Source",
			date: "2022-01-01",
			note: "Note"
		}
	},
	{
		id: 2,
		name: "Jane Smith",
		basicInfo: {
			idNumber: "54321",
			phone: "987-654-3210",
			gender: "Female",
			birthDate: "1992-02-15",
			metro: "Downtown Station",
			address: "456 Elm St, New York"
		},
		bankInfo: { bank: "Chase Bank", cardNumber: "9876 5432 1098 7654" },
		documentInfo: {
			citizenship: "USA",
			passport: "CD654321",
			issuedBy: "Department of State",
			expirationDate: "2024-03-01",
			residenceAddress: "789 Oak St, New York",
			registrationAddress: "456 Elm St, New York",
			patent: "54321",
			patentExpirationDate: "2022-11-30",
			snils: "987-654-321 00",
			inn: "0987654321",
			medicalBook: "M987654321"
		},
		hrInfo: {
			position: "Marketing Manager",
			department: "Marketing",
			decision: "Approved",
			source: "Job Board",
			date: "2023-04-15",
			note: "Experienced candidate"
		}
	},
	{
		id: 3,
		name: "Robert Johnson",
		basicInfo: {
			idNumber: "98765",
			phone: "555-123-4567",
			gender: "Male",
			birthDate: "1985-08-10",
			metro: "North Station",
			address: "789 Oak St, New York"
		},
		bankInfo: { bank: "Wells Fargo", cardNumber: "5678 9012 3456 7890" },
		documentInfo: {
			citizenship: "USA",
			passport: "EF567890",
			issuedBy: "Department of State",
			expirationDate: "2023-09-30",
			residenceAddress: "123 Main St, New York",
			registrationAddress: "789 Oak St, New York",
			patent: "98765",
			patentExpirationDate: "2022-10-31",
			snils: "555-123-456 00",
			inn: "5678901234",
			medicalBook: "M555123456"
		},
		hrInfo: {
			position: "Sales Representative",
			department: "Sales",
			decision: "Approved",
			source: "Referral",
			date: "2023-05-10",
			note: "Good communication skills"
		}
	},
	{
		id: 4,
		name: "Emily Wilson",
		basicInfo: {
			idNumber: "24680",
			phone: "111-222-3333",
			gender: "Female",
			birthDate: "1994-04-20",
			metro: "West Station",
			address: "456 Elm St, New York"
		},
		bankInfo: { bank: "Citibank", cardNumber: "4567 8901 2345 6789" },
		documentInfo: {
			citizenship: "USA",
			passport: "GH098765",
			issuedBy: "Department of State",
			expirationDate: "2026-05-15",
			residenceAddress: "789 Oak St, New York",
			registrationAddress: "456 Elm St, New York",
			patent: "24680",
			patentExpirationDate: "2024-12-31",
			snils: "111-222-333 00",
			inn: "2345678901",
			medicalBook: "M111222333"
		},
		hrInfo: {
			position: "Graphic Designer",
			department: "Design",
			decision: "Approved",
			source: "Job Fair",
			date: "2023-03-25",
			note: "Creative candidate"
		}
	},
	{
		id: 5,
		name: "Michael Anderson",
		basicInfo: {
			idNumber: "13579",
			phone: "999-888-7777",
			gender: "Male",
			birthDate: "1988-12-05",
			metro: "East Station",
			address: "789 Oak St, New York"
		},
		bankInfo: {
			bank: "JP Morgan Chase",
			cardNumber: "7890 1234 5678 9012"
		},
		documentInfo: {
			citizenship: "USA",
			passport: "IJ876543",
			issuedBy: "Department of State",
			expirationDate: "2023-08-01",
			residenceAddress: "123 Main St, New York",
			registrationAddress: "789 Oak St, New York",
			patent: "13579",
			patentExpirationDate: "2023-09-30",
			snils: "999-888-777 00",
			inn: "7890123456",
			medicalBook: "M999888777"
		},
		hrInfo: {
			position: "Project Manager",
			department: "Project Management",
			decision: "Approved",
			source: "Internal Application",
			date: "2023-06-05",
			note: "Strong leadership skills"
		}
	},
	{
		id: 6,
		name: "Olivia Martinez",
		basicInfo: {
			idNumber: "97531",
			phone: "777-666-5555",
			gender: "Female",
			birthDate: "1993-07-12",
			metro: "South Station",
			address: "456 Elm St, New York"
		},
		bankInfo: {
			bank: "Bank of America",
			cardNumber: "8901 2345 6789 0123"
		},
		documentInfo: {
			citizenship: "USA",
			passport: "KL765432",
			issuedBy: "Department of State",
			expirationDate: "2024-11-15",
			residenceAddress: "789 Oak St, New York",
			registrationAddress: "456 Elm St, New York",
			patent: "97531",
			patentExpirationDate: "2023-06-30",
			snils: "777-666-555 00",
			inn: "6789012345",
			medicalBook: "M777666555"
		},
		hrInfo: {
			position: "Human Resources Specialist",
			department: "Human Resources",
			decision: "Approved",
			source: "Job Board",
			date: "2023-04-20",
			note: "Excellent candidate"
		}
	},
	{
		id: 7,
		name: "David Brown",
		basicInfo: {
			idNumber: "75319",
			phone: "444-555-6666",
			gender: "Male",
			birthDate: "1991-03-18",
			metro: "Central Station",
			address: "789 Oak St, New York"
		},
		bankInfo: { bank: "Chase Bank", cardNumber: "0123 4567 8901 2345" },
		documentInfo: {
			citizenship: "USA",
			passport: "MN654321",
			issuedBy: "Department of State",
			expirationDate: "2023-10-15",
			residenceAddress: "123 Main St, New York",
			registrationAddress: "789 Oak St, New York",
			patent: "75319",
			patentExpirationDate: "2022-12-31",
			snils: "444-555-666 00",
			inn: "5678901234",
			medicalBook: "M444555666"
		},
		hrInfo: {
			position: "Financial Analyst",
			department: "Finance",
			decision: "Approved",
			source: "Internal Referral",
			date: "2023-05-15",
			note: "Strong analytical skills"
		}
	},
	{
		id: 8,
		name: "Sophia Taylor",
		basicInfo: {
			idNumber: "15937",
			phone: "222-333-4444",
			gender: "Female",
			birthDate: "1990-06-25",
			metro: "Downtown Station",
			address: "456 Elm St, New York"
		},
		bankInfo: { bank: "Wells Fargo", cardNumber: "2345 6789 0123 4567" },
		documentInfo: {
			citizenship: "USA",
			passport: "OP543210",
			issuedBy: "Department of State",
			expirationDate: "2024-02-01",
			residenceAddress: "789 Oak St, New York",
			registrationAddress: "456 Elm St, New York",
			patent: "15937",
			patentExpirationDate: "2023-11-30",
			snils: "222-333-444 00",
			inn: "3456789012",
			medicalBook: "M222333444"
		},
		hrInfo: {
			position: "Operations Manager",
			department: "Operations",
			decision: "Approved",
			source: "Job Fair",
			date: "2023-03-10",
			note: "Organized and detail-oriented"
		}
	},
	{
		id: 9,
		name: "Liam Rodriguez",
		basicInfo: {
			idNumber: "75391",
			phone: "888-999-0000",
			gender: "Male",
			birthDate: "1989-09-08",
			metro: "North Station",
			address: "789 Oak St, New York"
		},
		bankInfo: { bank: "Citibank", cardNumber: "3456 7890 1234 5678" },
		documentInfo: {
			citizenship: "USA",
			passport: "QR987654",
			issuedBy: "Department of State",
			expirationDate: "2023-07-15",
			residenceAddress: "123 Main St, New York",
			registrationAddress: "789 Oak St, New York",
			patent: "75391",
			patentExpirationDate: "2022-10-31",
			snils: "888-999-000 00",
			inn: "4567890123",
			medicalBook: "M888999000"
		},
		hrInfo: {
			position: "Customer Service Representative",
			department: "Customer Service",
			decision: "Approved",
			source: "Referral",
			date: "2023-06-15",
			note: "Excellent interpersonal skills"
		}
	},
	{
		id: 10,
		name: "Ava Garcia",
		basicInfo: {
			idNumber: "24681",
			phone: "111-222-3333",
			gender: "Female",
			birthDate: "1993-02-10",
			metro: "West Station",
			address: "456 Elm St, New York"
		},
		bankInfo: {
			bank: "JP Morgan Chase",
			cardNumber: "4567 8901 2345 6789"
		},
		documentInfo: {
			citizenship: "USA",
			passport: "ST876543",
			issuedBy: "Department of State",
			expirationDate: "2024-05-01",
			residenceAddress: "789 Oak St, New York",
			registrationAddress: "456 Elm St, New York",
			patent: "24681",
			patentExpirationDate: "2024-02-28",
			snils: "111-222-333 00",
			inn: "5678901234",
			medicalBook: "M111222333"
		},
		hrInfo: {
			position: "Administrative Assistant",
			department: "Administration",
			decision: "Approved",
			source: "Job Board",
			date: "2023-04-05",
			note: "Organized and detail-oriented"
		}
	},
	{
		id: 10,
		name: "Ava Garcia",
		basicInfo: {
			idNumber: "24681",
			phone: "111-222-3333",
			gender: "Female",
			birthDate: "1993-02-10",
			metro: "West Station",
			address: "456 Elm St, New York"
		},
		bankInfo: {
			bank: "JP Morgan Chase",
			cardNumber: "4567 8901 2345 6789"
		},
		documentInfo: {
			citizenship: "USA",
			passport: "ST876543",
			issuedBy: "Department of State",
			expirationDate: "2024-05-01",
			residenceAddress: "789 Oak St, New York",
			registrationAddress: "456 Elm St, New York",
			patent: "24681",
			patentExpirationDate: "2024-02-28",
			snils: "111-222-333 00",
			inn: "5678901234",
			medicalBook: "M111222333"
		},
		hrInfo: {
			position: "Administrative Assistant",
			department: "Administration",
			decision: "Approved",
			source: "Job Board",
			date: "2023-04-05",
			note: "Organized and detail-oriented"
		}
	},
	{
		id: 11,
		name: "Noah Lopez",
		basicInfo: {
			idNumber: "97531",
			phone: "777-666-5555",
			gender: "Male",
			birthDate: "1991-11-20",
			metro: "South Station",
			address: "789 Oak St, New York"
		},
		bankInfo: {
			bank: "Bank of America",
			cardNumber: "8901 2345 6789 0123"
		},
		documentInfo: {
			citizenship: "USA",
			passport: "UV765432",
			issuedBy: "Department of State",
			expirationDate: "2023-12-15",
			residenceAddress: "123 Main St, New York",
			registrationAddress: "789 Oak St, New York",
			patent: "97531",
			patentExpirationDate: "2023-09-30",
			snils: "777-666-555 00",
			inn: "6789012345",
			medicalBook: "M777666555"
		},
		hrInfo: {
			position: "Accountant",
			department: "Finance",
			decision: "Approved",
			source: "Internal Referral",
			date: "2023-05-20",
			note: "Strong analytical skills"
		}
	},
	{
		id: 12,
		name: "Isabella Scott",
		basicInfo: {
			idNumber: "75319",
			phone: "444-555-6666",
			gender: "Female",
			birthDate: "1994-08-15",
			metro: "Central Station",
			address: "456 Elm St, New York"
		},
		bankInfo: { bank: "Wells Fargo", cardNumber: "0123 4567 8901 2345" },
		documentInfo: {
			citizenship: "USA",
			passport: "WX654321",
			issuedBy: "Department of State",
			expirationDate: "2023-11-01",
			residenceAddress: "789 Oak St, New York",
			registrationAddress: "456 Elm St, New York",
			patent: "75319",
			patentExpirationDate: "2022-12-31",
			snils: "444-555-666 00",
			inn: "5678901234",
			medicalBook: "M444555666"
		},
		hrInfo: {
			position: "Marketing Coordinator",
			department: "Marketing",
			decision: "Approved",
			source: "Job Fair",
			date: "2023-05-25",
			note: "Creative and detail-oriented"
		}
	},
	{
		id: 14,
		name: "Lucas Lee",
		basicInfo: {
			idNumber: "24682",
			phone: "111-222-3333",
			gender: "Male",
			birthDate: "1992-01-03",
			metro: "West Station",
			address: "456 Elm St, New York"
		},
		bankInfo: {
			bank: "JP Morgan Chase",
			cardNumber: "4567 8901 2345 6789"
		},
		documentInfo: {
			citizenship: "USA",
			passport: "AB098765",
			issuedBy: "Department of State",
			expirationDate: "2024-03-15",
			residenceAddress: "789 Oak St, New York",
			registrationAddress: "456 Elm St, New York",
			patent: "24682",
			patentExpirationDate: "2024-02-28",
			snils: "111-222-333 00",
			inn: "5678901234",
			medicalBook: "M111222333"
		},
		hrInfo: {
			position: "Software Developer",
			department: "IT",
			decision: "Approved",
			source: "Job Board",
			date: "2023-05-10",
			note: "Strong programming skills"
		}
	},
	{
		id: 13,
		name: "Mia Lewis",
		basicInfo: {
			idNumber: "15937",
			phone: "222-333-4444",
			gender: "Female",
			birthDate: "1989-04-05",
			metro: "Downtown Station",
			address: "789 Oak St, New York"
		},
		bankInfo: { bank: "Citibank", cardNumber: "2345 6789 0123 4567" },
		documentInfo: {
			citizenship: "USA",
			passport: "YZ543210",
			issuedBy: "Department of State",
			expirationDate: "2024-07-01",
			residenceAddress: "123 Main St, New York",
			registrationAddress: "789 Oak St, New York",
			patent: "15937",
			patentExpirationDate: "2023-11-30",
			snils: "222-333-444 00",
			inn: "3456789012",
			medicalBook: "M222333444"
		},
		hrInfo: {
			position: "Sales Associate",
			department: "Sales",
			decision: "Approved",
			source: "Internal Application",
			date: "2023-06-01",
			note: "Excellent sales record"
		}
	},
	{
		id: 14,
		name: "Lucas Lee",
		basicInfo: {
			idNumber: "24682",
			phone: "111-222-3333",
			gender: "Male",
			birthDate: "1992-01-03",
			metro: "West Station",
			address: "456 Elm St, New York"
		},
		bankInfo: {
			bank: "JP Morgan Chase",
			cardNumber: "4567 8901 2345 6789"
		},
		documentInfo: {
			citizenship: "USA",
			passport: "AB098765",
			issuedBy: "Department of State",
			expirationDate: "2024-03-15",
			residenceAddress: "789 Oak St, New York",
			registrationAddress: "456 Elm St, New York",
			patent: "24682",
			patentExpirationDate: "2024-02-28",
			snils: "111-222-333 00",
			inn: "5678901234",
			medicalBook: "M111222333"
		},
		hrInfo: {
			position: "Software Developer",
			department: "IT",
			decision: "Approved",
			source: "Job Board",
			date: "2023-05-10",
			note: "Strong programming skills"
		}
	},
	{
		id: 15,
		name: "Benjamin Hill",
		basicInfo: {
			idNumber: "97532",
			phone: "777-666-5555",
			gender: "Male",
			birthDate: "1987-05-28",
			metro: "South Station",
			address: "789 Oak St, New York"
		},
		bankInfo: {
			bank: "Bank of America",
			cardNumber: "8901 2345 6789 0123"
		},
		documentInfo: {
			citizenship: "USA",
			passport: "CD876543",
			issuedBy: "Department of State",
			expirationDate: "2023-09-15",
			residenceAddress: "123 Main St, New York",
			registrationAddress: "789 Oak St, New York",
			patent: "97532",
			patentExpirationDate: "2023-09-30",
			snils: "777-666-555 00",
			inn: "6789012345",
			medicalBook: "M777666555"
		},
		hrInfo: {
			position: "Business Analyst",
			department: "Business Analysis",
			decision: "Approved",
			source: "Referral",
			date: "2023-05-20",
			note: "Strong analytical and problem-solving skills"
		}
	},
	{
		id: 16,
		name: "Emma Phillips",
		basicInfo: {
			idNumber: "75320",
			phone: "444-555-6666",
			gender: "Female",
			birthDate: "1993-10-12",
			metro: "Central Station",
			address: "456 Elm St, New York"
		},
		bankInfo: { bank: "Wells Fargo", cardNumber: "0123 4567 8901 2345" },
		documentInfo: {
			citizenship: "USA",
			passport: "EF654321",
			issuedBy: "Department of State",
			expirationDate: "2023-05-01",
			residenceAddress: "789 Oak St, New York",
			registrationAddress: "456 Elm St, New York",
			patent: "75320",
			patentExpirationDate: "2022-12-31",
			snils: "444-555-666 00",
			inn: "5678901234",
			medicalBook: "M444555666"
		},
		hrInfo: {
			position: "Human Resources Coordinator",
			department: "Human Resources",
			decision: "Approved",
			source: "Job Fair",
			date: "2023-05-25",
			note: "Excellent communication skills"
		}
	},
	{
		id: 17,
		name: "Henry Baker",
		basicInfo: {
			idNumber: "15938",
			phone: "222-333-4444",
			gender: "Male",
			birthDate: "1988-03-17",
			metro: "Downtown Station",
			address: "789 Oak St, New York"
		},
		bankInfo: { bank: "Citibank", cardNumber: "2345 6789 0123 4567" },
		documentInfo: {
			citizenship: "USA",
			passport: "GH543210",
			issuedBy: "Department of State",
			expirationDate: "2024-09-01",
			residenceAddress: "123 Main St, New York",
			registrationAddress: "789 Oak St, New York",
			patent: "15938",
			patentExpirationDate: "2023-11-30",
			snils: "222-333-444 00",
			inn: "3456789012",
			medicalBook: "M222333444"
		},
		hrInfo: {
			position: "Project Manager",
			department: "Project Management",
			decision: "Approved",
			source: "Internal Referral",
			date: "2023-05-15",
			note: "Excellent leadership skills"
		}
	},
	{
		id: 18,
		name: "Olivia Morgan",
		basicInfo: {
			idNumber: "24683",
			phone: "111-222-3333",
			gender: "Female",
			birthDate: "1990-12-01",
			metro: "West Station",
			address: "456 Elm St, New York"
		},
		bankInfo: {
			bank: "JP Morgan Chase",
			cardNumber: "4567 8901 2345 6789"
		},
		documentInfo: {
			citizenship: "USA",
			passport: "IJ098765",
			issuedBy: "Department of State",
			expirationDate: "2024-06-15",
			residenceAddress: "789 Oak St, New York",
			registrationAddress: "456 Elm St, New York",
			patent: "24683",
			patentExpirationDate: "2024-02-28",
			snils: "111-222-333 00",
			inn: "5678901234",
			medicalBook: "M111222333"
		},
		hrInfo: {
			position: "Executive Assistant",
			department: "Administration",
			decision: "Approved",
			source: "Job Board",
			date: "2023-05-05",
			note: "Highly organized and efficient"
		}
	}
]
export default data
