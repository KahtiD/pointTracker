function getTeamPointsRequest() {

  var classChange0 = document.getElementById('barBox0');
  var classChange1 = document.getElementById('barBox1');
  var classChange2 = document.getElementById('barBox2');
  var classChange3 = document.getElementById('barBox3');

  var ssPoints = document.getElementById('ssPoints');
  ssPoints.innerHTML = '';
  var avgPoints = document.getElementById('avgPoints');
  avgPoints.innerHTML = '';
  var jdiPoints = document.getElementById('jdiPoints');
  jdiPoints.innerHTML = '';
  var prPoints = document.getElementById('prPoints');
  prPoints.innerHTML = '';

  var barHeightSS = document.getElementById('barSS');

  barHeightSS.style.height = '';

  var barHeightAVG = document.getElementById('barAVG');

  barHeightAVG.style.height = '';

  var barHeightJDI = document.getElementById('barJDI');

  barHeightJDI.style.height = '';

  var barHeightPR = document.getElementById('barPR');


  barHeightPR.style.height = '';

  fetch('http://localhost:3000/getData')

  .then(res => res.json())

  .then(function(response) {

    //code use for playback to show drastic height change.

    barHeightSS.style.height = (JSON.stringify(response[0].team_points) * 10 )+ 'px';
    barHeightAVG.style.height = (JSON.stringify(response[1].team_points) * 10 ) + 'px';
    barHeightPR.style.height = (JSON.stringify(response[2].team_points)  * 10 ) + 'px';
    barHeightJDI.style.height = (JSON.stringify(response[3].team_points) * 10 ) + 'px';

    ssPoints.innerHTML = JSON.stringify(response[0].team_points);
    avgPoints.innerHTML = JSON.stringify(response[1].team_points);
    jdiPoints.innerHTML= JSON.stringify(response[2].team_points);
    prPoints.innerHTML = JSON.stringify(response[3].team_points);

    classChange0.classList.toggle("barChangeDirection");
    classChange1.classList.toggle("barChangeDirection");
    classChange2.classList.toggle("barChangeDirection");
    classChange3.classList.toggle("barChangeDirection");

    
    //the code below if correct for cumulative/week on week graph updates, gives the points as
    //percetange for the div height change.

    // barHeightSS.style.height = (JSON.stringify(response[0].team_points) / 400 ) * 100 + '%';
    // barHeightAVG.style.height = (JSON.stringify(response[1].team_points) / 400 ) * 100 + '%';
    // barHeightPR.style.height = (JSON.stringify(response[2].team_points) / 400 ) * 100 + '%';
    // barHeightJDI.style.height = (JSON.stringify(response[3].team_points) / 400 ) * 100 + '%';
    console.log(barHeightAVG.style.height);
    console.log(response[0]);
  });

}






function callNodeRed() {

  fetch('https://test0003.eu-gb.mybluemix.net/test', {

    mode: 'no-cors'

  })

  .then(res => console.log(res))

}


function getComments() {
  var name = document.getElementById('name');
  name.innerHTML = '';

  var comment = document.getElementById('comment');
  comment.innerHTML = '';

  fetch('http://localhost:3000/getComments')
  .then(res => res.json())
  .then(function(response){
    name.innerHTML = JSON.stringify(response[0].user_name);
    comment.innerHTML = JSON.stringify(response[0].text);
        console.log(response[0].text);
  });
}



function addNewTeamMate() {

  fetch('http://localhost:3000/postData', {

    method: 'POST',

    headers: {

      'Accept': 'application/json',

      'Content-Type': 'application/json'

    },

    body: {

      real_name: document.getElementById('name').value,

      team_id: document.getElementById('team').value

    }

  })

  .then(res => console.log(res, "sent"))

}



// module.exports = [getRequest, callNodeRed, addNewTeamMate];```
