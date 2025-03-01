function insert_Row() {
    var table = document.getElementById("sampleTable");

            // Create a new row at the top (insert a row at the 0th index)
            var newRow = table.insertRow(1); // Use index 1 to add a row just below the header

            // Create two new cells in this row
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);

            // Set the content of the new cells
            cell1.innerHTML = "New Cell1";
            cell2.innerHTML = "New Cell2";
}
