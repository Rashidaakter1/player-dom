const allplayers=()=>{
    const searchValue = document.getElementById('search-box').value ;
    const url=`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>showPlayers(data.player))
}
const showPlayers=(players)=>{
    const parent =document.getElementById('parent')
    for(const player of players){
        console.log(player);
        const div = document.createElement('div');
        div.classList.add('col-md-12')
        div.innerHTML=`
                   <div class="card h-100">
                        <img src="${player.strThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Name${player.strPlayer}</h5>
                          <p class="card-text"></p>
                        </div>
                        <div >
                      <button>delete</button>
                      <button onclick="details('${player.idPlayer}')" >details</button>
                     </div>
                      </div>
                      
                    </div>
        `
        parent.appendChild(div)               
    }

}
const details =(info)=>{
    const url=`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetail(data.players[0]))

}
const displayDetail=(info)=>{
    const divDetail = document.getElementById('detail-div')
    const div = document.createElement('div')
    div.innerHTML=`
    <h1>NAME ${info.strPlayer}</h1>
    `
    divDetail.appendChild(div)

}