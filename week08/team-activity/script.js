const url = "https://swapi.dev/api/people/"

function getData(url){
fetch(url)
.then(
    function (response) {
        if (!response.ok) {
            console.log(response.status)
            return
        }
        response.json().then(function(data) {
            console.log(data)
            const main = document.querySelector('main');
            const ul = document.createElement('ul');
            data.results.map((person) => {
                let li = document.createElement('li');

                let name = document.createElement('h3');
                name.textContent = `Name: ${person.name}`

                let birthYear = document.createElement('p');
                birthYear.textContent = `Birth Year: ${person.birth_year}`;

                let gender = document.createElement('p');
                gender.textContent = `Gender: ${person.gender}`;

                let hairColor = document.createElement('p');
                hairColor.textContent = `Hair Color: ${person.hair_color}`;

                let eyeColor = document.createElement('p');
                eyeColor.textContent = `Eye Color: ${person.eye_color}`;

                li.appendChild(name);
                li.appendChild(birthYear);
                li.appendChild(gender);
                li.appendChild(hairColor);
                li.appendChild(eyeColor);

                ul.appendChild(li)
            })
            let previousBtn, nextBtn
            main.appendChild(ul);

            if (data.previous) {
            previousBtn = document.createElement('button');
            previousBtn.setAttribute('id', "previous");
            previousBtn.textContent = "< Previous"
            main.appendChild(previousBtn);
            document.querySelector('#previous').addEventListener('click', (e) => {
                document.querySelector('main').innerHTML = ""
                getData(data.previous)
            })
            }
            
            for (let i = 1; i < 7; i++) {
                let pageButton = document.createElement('button');
                pageButton.setAttribute('id', `page${i}`);
                pageButton.setAttribute('class', 'page-button');
                pageButton.textContent = i;

                main.appendChild(pageButton)
                pageButton.addEventListener('click', (e) => {
                    document.querySelector('main').innerHTML = ""
                    getData(`http://swapi.dev/api/people/?page=${i}`);
                })
            }

            if (data.next){
            nextBtn = document.createElement('button');
            nextBtn.setAttribute('id', "next");
            nextBtn.textContent = "Next >"
            main.appendChild(nextBtn);

            document.querySelector('#next').addEventListener('click', (e) => {
                document.querySelector('main').innerHTML = ""
                getData(data.next)
            })
            }

            
            
            




        })
    }
).catch(console.error);
}

getData(url)

// "http://swapi.dev/api/people/?page=3"