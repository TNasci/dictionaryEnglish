function send(word, meaning, translation, wordType, dateRegister) {

    const data = {
        "word": word,
        "meaning": meaning,
        "translation": translation,
        "wordType": wordType,
        "dateRegister": dateRegister
    }

    let options = {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    let fetchRes = fetch("https://localhost:7110/register", options);
    fetchRes.then((response => response.json()))
        .then((result) => {
            document.getElementById("word").value = ""
            document.getElementById("meaning").value =""
            document.getElementById("translation").value = ""
            document.getElementById("wordType").value = ""
            document.getElementById("dateRegister").value = ""
            
            Swal.fire(
                "Success",
                "Word registered successfully",
                "success"
            )
        })
        .catch((error) => {
            Swal.fire(
                "Erro",
                "There was an error registering a word",
                "error"
            )
            console.log(error)
        })
}

function save() {
    let word = document.getElementById("word").value
    let meaning = document.getElementById("meaning").value
    let translation = document.getElementById("translation").value
    let wordType = document.getElementById("wordType").value
    let dateRegister = document.getElementById("dateRegister").value

    let errors = []
    let today = new Date()

    if (word, meaning, translation, wordType == "") {
        errors.push("Please, fill in the fields")
    }

    if (dateRegister !== today.toISOString().slice(0, 10)) {
        errors.push("Please enter today's date.")
    }

    if (errors.length == 0) {

        send(word, meaning, translation, wordType, dateRegister)

    } else {
        Swal.fire(
            "Fill in the fields correctly",
            errors.join("<br>"),
            "error"
        )
    }


    return false

}