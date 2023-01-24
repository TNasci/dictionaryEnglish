function list() {
    fetch("https://localhost:7110/words", {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
        .then((result) => {
            render(result);
        })
        .catch((error) => {
            Swal.fire(
                'Erro',
                'There was an error listing the words',
                'error'

            )
            console.log(error);
        })
}

function deleteWord(id) {
    fetch("https://localhost:7110/words/" + id, {
        method: "DELETE",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
        .then((result) => {
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
            Swal.fire(
                'Erro',
                'There was an error delete the words',
                'error'
            )
        })
}

function render(words) {

    let table = document.querySelector("#tableWords, tbody")
    for (let word of words) {
        let line =
            `
            <tr>
                <td>${word.id}</td>
                <td>${word.word}</td>
                <td>${word.meaning}</td>
                <td>${word.translation}</td>
                <td>${word.wordType}</td>
                <td>${word.dateRegister}</td>
                <td>
                    <a href="javascript: deleteWord(${word.id})">Delete</a>
                </td>
            </tr>
        `
        let tr = document.createElement("tr")
        tr.innerHTML = line

        table.appendChild(tr)

    }
}