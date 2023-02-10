console.log("Hello World")


// area 4
type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
  }

  const myCourses: Array<Course> = [ 
      {courseNumber: "CIS 162", courseName: "Computer Science I", semesterTaken: "Fall 2020"},
      {courseNumber: "CIS 163", courseName: "Computer Science II", semesterTaken: "Winter 2021"},
      {courseNumber: "CIS 241", courseName: "System-Level Programming and Utilities", semesterTaken: "Fall 2021"},
      {courseNumber: "CIS 350", courseName: "Intro to Software Engineering", semesterTaken: "Winter 2022"},
      {courseNumber: "CIS 353", courseName: "Database", semesterTaken: "Winter 2022"},
      {courseNumber: "CIS 351", courseName: "Computer Organization and Assembly Language", semesterTaken: "Fall 2022"},
      {courseNumber: "CIS 457", courseName: "Data Communications", semesterTaken: "Fall 2022"},
      {courseNumber: "CIS 290", courseName: "Professional Responsibilities and Practices", semesterTaken: "Fall 2022"},
  ]

  const tArea4 = document.getElementById("area4-table")
  const tables = document.createElement("table")
  const th1 = document.createElement("th")
  const th2 = document.createElement("th")
  const th3 = document.createElement("th")
  const textTh = document.createTextNode("Course Number")
  const textTh2 = document.createTextNode("Course Name")
  const textTh3 = document.createTextNode("Semester Taken")
  th1.appendChild(textTh)
  th2.appendChild(textTh2)
  th3.appendChild(textTh3)
  tables.appendChild(th1)
  tables.appendChild(th2)
  tables.appendChild(th3)

  for(let x of myCourses){
	  const tr2 = document.createElement("tr")
	  const td1 = document.createElement("td")
	  const td2 = document.createElement("td")
    const td3 = document.createElement("td")
	  const textTd = document.createTextNode(`${x.courseNumber}`)
	  const textTd2 = document.createTextNode(`${x.courseName}`)
    const textTd3 = document.createTextNode(`${x.semesterTaken}`)
	
    td1.appendChild(textTd)
    td2.appendChild(textTd2)
    td3.appendChild(textTd3)
    tr2.appendChild(td1)
    tr2.appendChild(td2)
    tr2.appendChild(td3)
    tables.setAttribute("class", "wordDisp")
    tables.appendChild(tr2)
  }
  tArea4.appendChild(tables)



// area 6
type Company = {
    name: string,           // Ex: "MSFT"
    abbreviation: string,   // Ex: Microsoft
    url: string             // Ex: https://microsoft.com
  }

const companies: Array<Company> = [ 
    {name: "ApIn", abbreviation: "Applied Innovation", url: "https://www.appliedinnovation.com"},
    {name: "GVSU", abbreviation: "Grand Valley State University", url: "https://www.gvsu.edu"},
]

const tArea6 = document.getElementById("area6-table")
for(let y of companies){
    const listing = document.createElement("ul")
    const entry = document.createElement("li")
    const linkTo = document.createElement("a")
    linkTo.setAttribute("href", `${y.url}`)
    const abrv = document.createElement("abbr")
    abrv.setAttribute("title", `${y.abbreviation}`)

    const textTitle = document.createTextNode(`${y.name}`)
    abrv.appendChild(textTitle)

    linkTo.appendChild(abrv)
    entry.appendChild(linkTo)
    listing.appendChild(entry)
    tArea6.appendChild(listing)
}



// area 8 
type SocialMedia = {
  icon: string;   // this can be a name of a local image or a URL to a remote image
  url: string;    // URL of the said social media company
  }
      
  const mediaIcons: Array<SocialMedia> = [ 
    {icon: "fa-brands fa-facebook", url: "https://www.facebook.com"},
    {icon: "fa-brands fa-github", url: "https://github.com"},
    {icon: "fa-brands fa-google", url: "https://www.google.com"},
    {icon: "fa-brands fa-instagram", url: "https://www.instagram.com"},
    {icon: "fa-brands fa-slack", url: "https://slack.com"},
    {icon: "fa-brands fa-twitter", url: "https://twitter.com"}
  ]

const tArea8 = document.getElementById("area8-table")

for(let z of mediaIcons){
  const alink = document.createElement("a")
  alink.setAttribute("href", `${z.url}`)
  const icons = document.createElement("i")
  icons.setAttribute("class", `${z.icon}`)

  alink.appendChild(icons)
  tArea8.appendChild(alink)
}