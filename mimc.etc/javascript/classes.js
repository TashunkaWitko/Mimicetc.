document.addEventListener("DOMContentLoaded", (event) => {

    let riga = document.querySelector(".riga");
    let specsTable = document.querySelector(".class-specs");
    let specsRiga = document.querySelector(".riga-classe");
    let equipRiga = document.querySelector(".riga-equip");

    specsTable.style.display = "none";
    let className;

    fetch('https://www.dnd5eapi.co/api/classes')
    .then(response => response.json())
    .then(data => {
        const dataparsed = data.results;
        console.log(dataparsed);

        for (let i = 0; i < dataparsed.length; i++) {
            riga.innerHTML += '<tr><td><a href="javascript:void(0)" class="class-name" name=' + dataparsed[i].index + '>' 
            + dataparsed[i].name + '</a></td><td>Player Handbook/Basic Rules</td></tr>';
        }

        className = document.querySelectorAll(".class-name");
        console.log(className);

        for (let i = 0; i < dataparsed.length; i++) {
            className[i].addEventListener("click", (event) =>{

                document.querySelector('.table').style.display="none";
                specsTable.style.display = "block";

                fetch('https://www.dnd5eapi.co/api/classes/'+ className[i].getAttribute('name'))
                .then(response => response.json())
                .then(data => { 
                    console.log(data);
                    document.querySelector('footer').style.maxHeight="50px";
                    specsRiga.innerHTML += '<tr><td>' + data.name + '</td><td> D' + data.hit_die + '</td><td>' + 
                    data.saving_throws[0].name + '-' + data.saving_throws[1].name + '</td><td>' + data.subclasses[0].name + '</td></tr>';

                    if(data.starting_equipment.length > 0) {
                        for (let i = 0; i < data.starting_equipment.length; i++){
                            equipRiga.innerHTML += '<tr><td>' + data.starting_equipment[i].equipment.name + '</td></tr>';
                        }
                    }
                    else{
                            equipRiga.innerHTML += '<tr><td>No starting equipment</td></tr>'
                    }
                });
            }); // <- Add this closing curly brace
        } 
    }); 
});