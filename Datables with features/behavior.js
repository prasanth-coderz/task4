$(document).ready(function () {
  let data = [
    [
      "1",
      "Tiger Nixon",
      "System Architect",
      "Edinburgh",
      "61",
      "2011/04/25",
      "$320,800",
    ],
    [
      "2",
      "Garrett Winters",
      "Senior Accountant",
      "Tokyo",
      "63",
      "2011/07/25",
      "$170,750",
    ],
    [
      "3",
      "Ashton Cox",
      "Junior Technical Author",
      "San Francisco",
      "66",
      "2009/01/12",
      "$86,000",
    ],
    [
      "4",
      "Cedric Kelly",
      "Senior Javascript Developer",
      "Edinburgh",
      "22",
      "2012/03/29",
      "$433,060",
    ],
    [
      "5",
      "Airi Yen Satou",
      "Accountant",
      "Tokyo",
      "33",
      "2008/11/28",
      "$162,700",
    ],
    [
      "6",
      "Brielle Williamson",
      "Integration Specialist",
      "New York",
      "61",
      "2012/12/02",
      "$372,000",
    ],
    [
      "7",
      "Herrod Chandler",
      "Sales Assistant",
      "San Francisco",
      "59",
      "2012/08/06",
      "$137,500",
    ],
    [
      "8",
      "Rhona Davidson",
      "Integration Specialist",
      "Tokyo",
      "55",
      "2010/10/14",
      "$327,900",
    ],
    [
      "9",
      "Colleen Hurst",
      "Javascript Developer",
      "San Francisco",
      "39",
      "2009/09/15",
      "$205,500",
    ],
    [
      "10",
      "Sonya Frost",
      "Software Engineer",
      "Edinburgh",
      "23",
      "2008/12/13",
      "$103,600",
    ],
    [
      "11",
      "Jena Gaines",
      "Office Manager",
      "London",
      "30",
      "2008/12/19",
      "$90,560",
    ],
    [
      "12",
      "Quinn Flynn",
      "Support Lead",
      "Edinburgh",
      "22",
      "2013/03/03",
      "$342,000",
    ],
    [
      "13",
      "Charde Marshall",
      "Regional Director",
      "San Francisco",
      "36",
      "2008/10/16",
      "$470,600",
    ],
    [
      "14",
      "Haley Kennedy",
      "Senior Marketing Designer",
      "London",
      "43",
      "2012/12/18",
      "$313,500",
    ],
    [
      "15",
      "Tatyana Fitzpatrick",
      "Regional Director",
      "London",
      "19",
      "2010/03/17",
      "$385,750",
    ],
    [
      "16",
      "Michael Silva",
      "Marketing Designer",
      "London",
      "66",
      "2012/11/27",
      "$198,500",
    ],
    [
      "17",
      "Paul Byrd",
      "Chief Financial Officer (CFO)",
      "New York",
      "64",
      "2010/06/09",
      "$725,000",
    ],
    [
      "18",
      "Gloria Little",
      "Systems Administrator",
      "New York",
      "59",
      "2009/04/10",
      "$237,500",
    ],
    [
      "19",
      "Bradley Greer",
      "Software Engineer",
      "London",
      "41",
      "2012/10/13",
      "$132,000",
    ],
    [
      "20",
      "Dai Rios",
      "Personnel Lead",
      "Edinburgh",
      "35",
      "2012/09/26",
      "$217,500",
    ],
    [
      "21",
      "Jenette Caldwell",
      "Development Lead",
      "New York",
      "30",
      "2011/09/03",
      "$345,000",
    ],
    [
      "22",
      "Yuri Berry",
      "Chief Marketing Officer (CMO)",
      "New York",
      "40",
      "2009/06/25",
      "$675,000",
    ],
    [
      "23",
      "Caesar Vance",
      "Pre-Sales Support",
      "New York",
      "21",
      "2011/12/12",
      "$106,450",
    ],
    [
      "24",
      "Doris Wilder",
      "Sales Assistant",
      "Sidney",
      "23",
      "2010/09/20",
      "$85,600",
    ],
    [
      "25",
      "Angelica Ramos",
      "Chief Executive Officer (CEO)",
      "London",
      "47",
      "2009/10/09",
      "$1,200,000",
    ],
    [
      "26",
      "Gavin Joyce",
      "Developer",
      "Edinburgh",
      "42",
      "2010/12/22",
      "$92,575",
    ],
    [
      "27",
      "Jennifer Chang",
      "Regional Director",
      "Singapore",
      "28",
      "2010/11/14",
      "$357,650",
    ],
    [
      "28",
      "Brenden Wagner",
      "Software Engineer",
      "San Francisco",
      "28",
      "2011/06/07",
      "$206,850",
    ],
    [
      "29",
      "Fiona Green",
      "Chief Operating Officer (COO)",
      "San Francisco",
      "48",
      "2010/03/11",
      "$850,000",
    ],
    [
      "30",
      "Shou Itou",
      "Regional Marketing",
      "Tokyo",
      "20",
      "2011/08/14",
      "$163,000",
    ],
    [
      "31",
      "Michelle House",
      "Marketing",
      "Sydney",
      "29",
      "2011/07/25",
      "$95,400",
    ],
    [
      "32",
      "Suki Burks",
      "Junior Developer",
      "London",
      "53",
      "2009/10/22",
      "$114,500",
    ],
    [
      "33",
      "Prescott Bartlett",
      "Technical Author",
      "London",
      "27",
      "2011/05/07",
      "$145,000",
    ],
    [
      "34",
      "Gavin Cortez",
      "Team Leader",
      "San Francisco",
      "22",
      "2008/10/26",
      "$235,500",
    ],
    [
      "35",
      "Martena Mccray",
      "Post-Sales support",
      "Edinburgh",
      "46",
      "2011/03/09",
      "$324,050",
    ],
    [
      "36",
      "Unity Butler",
      "Marketing Designer",
      "San Francisco",
      "47",
      "2009/12/09",
      "$85,675",
    ],
    [
      "37",
      "Howard Hatfield",
      "Office Manager",
      "San Francisco",
      "51",
      "2008/12/16",
      "$164,500",
    ],
    [
      "38",
      "Hope Fuentes",
      "Secretary",
      "San Francisco",
      "41",
      "2010/02/12",
      "$109,850",
    ],
    [
      "39",
      "Vivian Harrell",
      "Financial Controller",
      "San Francisco",
      "62",
      "2009/02/14",
      "$452,500",
    ],
    [
      "40",
      "Timothy Mooney",
      "Office Manager",
      "London",
      "37",
      "2008/12/11",
      "$136,200",
    ],
    [
      "41",
      "Jackson Bradshaw",
      "Director",
      "New York",
      "65",
      "2008/09/26",
      "$645,750",
    ],
    [
      "42",
      "Olivia Liang",
      "Support Engineer",
      "Singapore",
      "64",
      "2011/02/03",
      "$234,500",
    ],
    [
      "43",
      "Bruno Nash",
      "Software Engineer",
      "London",
      "38",
      "2011/05/03",
      "$163,500",
    ],
    [
      "44",
      "Sakura Yamamoto",
      "Support Engineer",
      "Tokyo",
      "37",
      "2009/08/19",
      "$139,575",
    ],
    [
      "45",
      "Thor Walton",
      "Developer",
      "New York",
      "61",
      "2013/08/11",
      "$98,540",
    ],
    [
      "46",
      "Finn Camacho",
      "Support Engineer",
      "San Francisco",
      "47",
      "2009/07/07",
      "$87,500",
    ],
    [
      "47",
      "Serge Baldwin",
      "Data Coordinator",
      "Singapore",
      "64",
      "2012/04/09",
      "$138,575",
    ],
    [
      "48",
      "Zenaida Frank",
      "Software Engineer",
      "New York",
      "63",
      "2010/01/04",
      "$125,250",
    ],
    [
      "49",
      "Zorita Serrano",
      "Software Engineer",
      "San Francisco",
      "56",
      "2012/06/01",
      "$115,000",
    ],
    [
      "50",
      "Jennifer Acosta",
      "Junior Javascript Developer",
      "Edinburgh",
      "43",
      "2013/02/01",
      "$75,650",
    ],
    [
      "51",
      "Cara Stevens",
      "Sales Assistant",
      "New York",
      "46",
      "2011/12/06",
      "$145,600",
    ],
    [
      "52",
      "Hermione Butler",
      "Regional Director",
      "London",
      "47",
      "2011/03/21",
      "$356,250",
    ],
    [
      "53",
      "Lael Greer",
      "Systems Administrator",
      "London",
      "21",
      "2009/02/27",
      "$103,500",
    ],
    [
      "54",
      "Jonas Alexander",
      "Developer",
      "San Francisco",
      "30",
      "2010/07/14",
      "$86,500",
    ],
    [
      "55",
      "Shad Decker",
      "Regional Director",
      "Edinburgh",
      "51",
      "2008/11/13",
      "$183,000",
    ],
    [
      "56",
      "Michael Bruce",
      "Javascript Developer",
      "Singapore",
      "29",
      "2011/06/27",
      "$183,000",
    ],
    [
      "57",
      "Donna Snider",
      "Customer Support",
      "New York",
      "27",
      "2011/01/25",
      "$112,000",
    ],
    [
      "58",
      "Lauren Peterson",
      "Sales Manager",
      "New York",
      "27",
      "2010/09/20",
      "$115,300",
    ],
    [
      "59",
      "Caleb Kelly",
      "Sales Assistant",
      "Sydney",
      "32",
      "2012/03/29",
      "$67,000",
    ],
    [
      "60",
      "Haley Kennedy",
      "Senior Marketing Designer",
      "London",
      "43",
      "2012/12/18",
      "$313,500",
    ],
    [
      "61",
      "Tatyana Fitzpatrick",
      "Regional Director",
      "London",
      "19",
      "2010/03/17",
      "$385,750",
    ],
    [
      "62",
      "Michael Silva",
      "Marketing Designer",
      "London",
      "66",
      "2012/11/27",
      "$198,500",
    ],
    [
      "63",
      "Paul Byrd",
      "Chief Financial Officer (CFO)",
      "New York",
      "64",
      "2010/06/09",
      "$725,000",
    ],
    [
      "64",
      "Gloria Little",
      "Systems Administrator",
      "New York",
      "59",
      "2009/04/10",
      "$237,500",
    ],
    [
      "65",
      "Bradley Greer",
      "Software Engineer",
      "London",
      "41",
      "2012/10/13",
      "$132,000",
    ],
    [
      "66",
      "Dai Rios",
      "Personnel Lead",
      "Edinburgh",
      "35",
      "2012/09/26",
      "$217,500",
    ],
    [
      "67",
      "Jenette Caldwell",
      "Development Lead",
      "New York",
      "30",
      "2011/09/03",
      "$345,000",
    ],
    [
      "68",
      "Yuri Berry",
      "Chief Marketing Officer (CMO)",
      "New York",
      "40",
      "2009/06/25",
      "$675,000",
    ],
    [
      "69",
      "Caesar Vance",
      "Pre-Sales Support",
      "New York",
      "21",
      "2011/12/12",
      "$106,450",
    ],
    [
      "70",
      "Doris Wilder",
      "Sales Assistant",
      "Sidney",
      "23",
      "2010/09/20",
      "$85,600",
    ],
    [
      "71",
      "Angelica Ramos",
      "Chief Executive Officer (CEO)",
      "London",
      "47",
      "2009/10/09",
      "$1,200,000",
    ],
    [
      "72",
      "Gavin Joyce",
      "Developer",
      "Edinburgh",
      "42",
      "2010/12/22",
      "$92,575",
    ],
    [
      "73",
      "Jennifer Chang",
      "Regional Director",
      "Singapore",
      "28",
      "2010/11/14",
      "$357,650",
    ],
    [
      "74",
      "Brenden Wagner",
      "Software Engineer",
      "San Francisco",
      "28",
      "2011/06/07",
      "$206,850",
    ],
    [
      "75",
      "Fiona Green",
      "Chief Operating Officer (COO)",
      "San Francisco",
      "48",
      "2010/03/11",
      "$850,000",
    ],
    [
      "76",
      "Shou Itou",
      "Regional Marketing",
      "Tokyo",
      "20",
      "2011/08/14",
      "$163,000",
    ],
    [
      "77",
      "Michelle House",
      "Marketing",
      "Sydney",
      "29",
      "2011/07/25",
      "$95,400",
    ],
    [
      "78",
      "Suki Burks",
      "Senior Developer",
      "London",
      "53",
      "2009/10/22",
      "$114,500",
    ],
    [
      "79",
      "Prescott Bartlett",
      "Technical Author",
      "London",
      "27",
      "2011/05/07",
      "$145,000",
    ],
    [
      "80",
      "Gavin Cortez",
      "Team Leader",
      "San Francisco",
      "22",
      "2008/10/26",
      "$235,500",
    ],
    [
      "81",
      "Martena Mccray",
      "Post-Sales support",
      "Edinburgh",
      "46",
      "2011/03/09",
      "$324,050",
    ],
    [
      "82",
      "Unity Butler",
      "Marketing Designer",
      "San Francisco",
      "47",
      "2009/12/09",
      "$85,675",
    ],
    [
      "83",
      "Howard Hatfield",
      "Office Manager",
      "San Francisco",
      "51",
      "2008/12/16",
      "$164,500",
    ],
    [
      "84",
      "Hope Fuentes",
      "Secretary",
      "San Francisco",
      "41",
      "2010/02/12",
      "$109,850",
    ],
    [
      "85",
      "Vivian Harrell",
      "Financial Controller",
      "San Francisco",
      "62",
      "2009/02/14",
      "$452,500",
    ],
    [
      "86",
      "Timothy Mooney",
      "Office Manager",
      "London",
      "37",
      "2008/12/11",
      "$136,200",
    ],
    [
      "87",
      "Jackson Bradshaw",
      "Director",
      "New York",
      "65",
      "2008/09/26",
      "$645,750",
    ],
    [
      "88",
      "Olivia Liang",
      "Support Engineer",
      "Singapore",
      "64",
      "2011/02/03",
      "$234,500",
    ],
    [
      "89",
      "Bruno Nash",
      "Software Engineer",
      "London",
      "38",
      "2011/05/03",
      "$163,500",
    ],
    [
      "90",
      "Sakura Yamamoto",
      "Support Engineer",
      "Tokyo",
      "37",
      "2009/08/19",
      "$139,575",
    ],
    [
      "91",
      "Thor Walton",
      "Developer",
      "New York",
      "61",
      "2013/08/11",
      "$98,540",
    ],
    [
      "92",
      "Finn Camacho",
      "Support Engineer",
      "San Francisco",
      "47",
      "2009/07/07",
      "$87,500",
    ],
    [
      "93",
      "Serge Baldwin",
      "Data Coordinator",
      "Singapore",
      "64",
      "2012/04/09",
      "$138,575",
    ],
    [
      "94",
      "Zenaida Frank",
      "Software Engineer",
      "New York",
      "63",
      "2010/01/04",
      "$125,250",
    ],
    [
      "95",
      "Zorita Serrano",
      "Software Engineer",
      "San Francisco",
      "56",
      "2012/06/01",
      "$115,000",
    ],
    [
      "96",
      "Jennifer Acosta",
      "Junior Javascript Developer",
      "Edinburgh",
      "43",
      "2013/02/01",
      "$75,650",
    ],
    [
      "97",
      "Cara Stevens",
      "Sales Assistant",
      "New York",
      "46",
      "2011/12/06",
      "$145,600",
    ],
    [
      "98",
      "Hermione Butler",
      "Regional Director",
      "London",
      "47",
      "2011/03/21",
      "$356,250",
    ],
    [
      "99",
      "Lael Greer",
      "Systems Administrator",
      "London",
      "21",
      "2009/02/27",
      "$103,500",
    ],
    [
      "100",
      "Jonas Alexander",
      "Developer",
      "San Francisco",
      "30",
      "2010/07/14",
      "$86,500",
    ],
  ];

  let currentPage = 1;
  let rowsPerPage = 10;
  let currentSort = "asc";

  function displayTableData() {
    let startIndex = (currentPage - 1) * rowsPerPage;
    let endIndex = startIndex + rowsPerPage;
    let paginatedData = data.slice(startIndex, endIndex);

    let tableBody = $("#customTable tbody");
    tableBody.empty();

    for (let i = 0; i < paginatedData.length; i++) {
      let row = $("<tr></tr>");
      for (let j = 0; j < paginatedData[i].length; j++) {
        let cell = $("<td></td>").text(paginatedData[i][j]);
        row.append(cell);
      }
      tableBody.append(row);
    }

    updatePagination();
  }

  function updatePagination() {
    let totalPages = Math.ceil(data.length / rowsPerPage);
    $("#pagination").text(`Page ${currentPage} of ${totalPages}`);

    if (currentPage === 1) {
      $("#prev").prop("disabled", true);
    } else {
      $("#prev").prop("disabled", false);
    }

    if (currentPage === totalPages) {
      $("#next").prop("disabled", true);
    } else {
      $("#next").prop("disabled", false);
    }
  }

  function performSearch() {
    let searchTerm = $("#searchInput").val().toLowerCase();

    if (searchTerm === "") {
      displayTableData();
      return;
    }

    let filteredData = data.filter((row) => {
      return row.join(",").toLowerCase().includes(searchTerm);
    });

    if (filteredData.length === 0) {
      $("#customTable tbody").html(
        "<tr><td colspan='7'>No data found</td></tr>"
      );
    } else {
      currentPage = 1;
      data = filteredData;
      displayTableData();
    }
  }

  function sortData(columnIndex) {
    if (currentSort === "asc") {
      data.sort((a, b) => {
        if (columnIndex === 0 || columnIndex === 4) {
          return parseFloat(a[columnIndex]) - parseFloat(b[columnIndex]);
        } else {
          return a[columnIndex].localeCompare(b[columnIndex]);
        }
      });
      currentSort = "desc";
    } else {
      data.sort((a, b) => {
        if (columnIndex === 0 || columnIndex === 4) {
          return parseFloat(b[columnIndex]) - parseFloat(a[columnIndex]);
        } else {
          return b[columnIndex].localeCompare(a[columnIndex]);
        }
      });
      currentSort = "asc";
    }

    displayTableData();
  }
  $("#prev").click(function () {
    if (currentPage > 1) {
      currentPage--;
      displayTableData();
    }
  });

  $("#next").click(function () {
    if (currentPage < Math.ceil(data.length / rowsPerPage)) {
      currentPage++;
      displayTableData();
    }
  });

  $("#searchInput").keyup(function () {
    performSearch();
  });

  $("th").click(function () {
    let columnIndex = $(this).index();
    sortData(columnIndex);
  });

  displayTableData();
});