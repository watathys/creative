function getAge() {
    document.getElementById("nameSubmit").addEventListener("click", function (event) {
        event.preventDefault();
        const value = document.getElementById("nameInput").value;
        if (value === "")
            return;

        const url = "https://api.agify.io/?name=" + value
        fetch(url)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                let results = "";
                let upperName = value.charAt(0).toUpperCase() + value.slice(1);
                results += '<h2>' + upperName + ",</h2>";
                results += '<h2> you are ' + json.age + " years old</h2>"
                if (json.age == null) {
                    results = '<h2> Enter a real name </h2>';
                }
                document.getElementById("nameResults").innerHTML = results;
            });

        const url2 = "https://api.genderize.io?name=" + value
        fetch(url2)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                let newResult = "";
                newResult += '<h2>There is a ' + json.probability * 100 + "% probability that,</h2>";
                newResult += '<h2> you are a';

                if (json.gender == "male") {
                    newResult += ' boy</h2>';
                } else {
                    newResult += ' girl </h2>';
                }
                
                if(json.gender == null)
                {
                    newResult = "";
                }

                if(value == "matt" || value == "Matt")
                {
                    newResult = "<h2>You are 100% gay</h2>"
                }
                document.getElementById("probability").innerHTML = newResult;
            });
    });
}