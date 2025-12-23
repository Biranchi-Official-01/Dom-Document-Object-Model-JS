const arr = [
  {
    team: "Chennai Super Kings",
    captain: "Ruturaj Gaikwad",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/102.png",
    trophyWins: 5,
    rgb: "rgb(255, 204, 0)",
    channelLogo: "https://example.com/star-sports.png"
  },
  {
    team: "Mumbai Indians",
    captain: "Hardik Pandya",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/54.png",
    trophyWins: 5,
    rgb: "rgb(0, 82, 155)",
    channelLogo: "https://example.com/star-sports.png"
  },
  {
    team: "Royal Challengers Bengaluru",
    captain: "Virat Kohil",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png",
    trophyWins: 0,
    rgb: "rgb(211, 47, 47)",
    channelLogo: "https://example.com/star-sports.png"
  },
  {
    team: "Kolkata Knight Riders",
    captain: "Ajinkya Rahane",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/44.png",
    trophyWins: 2,
    rgb: "rgb(75, 0, 130)",
    channelLogo: "https://example.com/star-sports.png"
  },
  {
    team: "Rajasthan Royals",
    captain: "Riyan Parag",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/189.png",
    trophyWins: 1,
    rgb: "rgb(255, 105, 180)",
    channelLogo: "https://example.com/star-sports.png"
  },
  {
    team: "Delhi Capitals",
    captain: "Axer patel",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/110.png",
    trophyWins: 0,
    rgb: "rgb(0, 70, 140)" ,
    channelLogo: "https://example.com/star-sports.png"
  },
  {
    team: "Sunrisers Hyderabad",
    captain: "Pat Cummins",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/33.png",
    trophyWins: 1,
    rgb: "rgb(255, 102, 0)",
    channelLogo: "https://example.com/star-sports.png"
  },
  {
    team: "Punjab Kings",
    captain: "Shreyas Iyer",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/12.png",
    trophyWins: 0,
    rgb: "rgb(216, 27, 96)",
    channelLogo: "https://example.com/star-sports.png"
  },
  {
    team: "Gujarat Titans",
    captain: "Shubman Gill",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/62.png",
    trophyWins: 0,
    rgb: "rgb(10, 33, 61)" ,
    channelLogo: "https://example.com/star-sports.png"
  },
  {
    team: "Lucknow Super Giants",
    captain: "Rishabh Pant",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/18.png",
    trophyWins: 0,
    rgb: "rgb(30, 136, 229)",
    channelLogo: "https://example.com/star-sports.png"
  }
];

var box = document.querySelector('.section1 .box')
var teamname = document.querySelector('.section1 .box .top h1')
var captain = document.querySelector('.section1 .box .middle .left .container1 img')
var capname = document.querySelector('.section1 .box .middle .left .container1 h3')
var channellogo = document.querySelector('.section1 .box .middle .right .container2 .chnlogo img')
var trofyy = document.querySelector('.section1 .box .middle .right .container2 .trofy img')
var btn = document.querySelector('button')




btn.addEventListener('click', function(){
  var winner = arr[Math.floor(Math.random()*arr.length)]

  box.style.backgroundColor = winner.rgb
  teamname.innerHTML = winner.team
  capname.innerHTML = winner.captain
  trofyy.innerText = winner.trophyWins
  captain.src = winner.img
})



