const search=()=>{

    const searchInput=document.getElementById('search-box').value;
    //console.log(searchInput);
    const url=`https://api.lyrics.ovh/suggest/${searchInput}`
    //console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data =>DisplaySong(data.data))

}
 const DisplaySong = song=>{
   //console.log(song);
   const SongContainer=document.getElementById('SongContainer');
   SongContainer.innerHTML='';
    song.forEach(song=>{
      
        const songDiv=document.createElement('div');
        songDiv.className='single-result row align-items-center my-3 p-3';
        songDiv.innerHTML=`
                     <div class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <p class="rank"> Ranked <span>${song.rank}</span>
                        <audio controls>
                             <source src="${song.preview}" type="audio/mpeg">
                             
                             
                        </audio>
                     </div>
                     <div class="col-md-3 text-md-right text-center">
                        <button onclick="getLyrics('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
                    </div>
        
        
        `;
        SongContainer.appendChild(songDiv);




    })
    
}

const getLyrics=(artist,title)=>{
    //console.log(artist,title);
   const url=` https://api.lyrics.ovh/v1/${artist}/${title}`
   fetch(url);
   fetch(url)
   .then(res=>res.json())
   .then(data =>displayRicks(data.lyrics))






}

  const displayRicks=lyrics=>{
      const lyricsDiv =document.getElementById('songLyrics');
      lyricsDiv.innerText=lyrics;


  }









