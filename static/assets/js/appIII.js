function showDataIV(dataIV) {
    
    let table = d3.select("#data-table")

    table.selectAll("tr").remove()
    
    let headerRow = table.append("tr")

    headerRow.append("th").text("Player")
    headerRow.append("th").text("Position")
    headerRow.append("th").text("Age")
    headerRow.append("th").text("Team")
    headerRow.append("th").text("Game")
    headerRow.append("th").text("FG %")
    headerRow.append("th").text("3 FG %")
    headerRow.append("th").text("2 FG %")
    headerRow.append("th").text("Reb/g")
    headerRow.append("th").text("Ast/g")
    headerRow.append("th").text("Points")
    headerRow.append("th").text("Year")
    headerRow.append("th").text("2020 Salary")
    headerRow.append("th").text("2020 Predicted")
    headerRow.append("th").text("Differential")


    let tableBody = table.append("tbody")

    data.forEach((d) => {
        let row = tableBody.append("tr")
        row.append("td").text(d.player)
        row.append("td").text(d.pos)
        row.append("td").text(d.age)
        row.append("td").text(d.team)
        row.append("td").text(d.g)
        row.append("td").text(d.fg)
        row.append("td").text(d.threep)
        row.append("td").text(d.twop)
        row.append("td").text(d.reb)
        row.append("td").text(d.ast)
        row.append("td").text(d.pts)
        row.append("td").text(d.year)
        row.append("td").text(d.contract2020)
        row.append("td").text(d.predicted2020)
        row.append("td").text(d.differential)

    })
    
}

function handleClick() {
    let year = d3.select("#table-filter-input").property("value")
    let filteredDataIV = dataIV.filter((d) => d.year === year)
    showDataIV(filteredDataIV)

}
d3.select("#fulltable-button").on("click", showDataIV)