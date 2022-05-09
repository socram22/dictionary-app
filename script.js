const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  console.log(inpWord);
  fetch(`${url}${inpWord}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `<div class="word">
                <h3>${inpWord}</h3>
                <button onclick="playSound()"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" with=25px height=25px x="0px" y="0px"
	 viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
<g id="XMLID_531_">
	<path id="XMLID_532_" d="M255,210h-10c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h10c8.284,0,15-6.716,15-15
		C270,216.716,263.284,210,255,210z"/>
	<path id="XMLID_533_" d="M285,150h-40c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h40c8.284,0,15-6.716,15-15
		C300,156.716,293.284,150,285,150z"/>
	<path id="XMLID_534_" d="M315,90h-70c-8.284,0-15,6.716-15,15s6.716,15,15,15h70c8.284,0,15-6.716,15-15S323.284,90,315,90z"/>
	<path id="XMLID_535_" d="M192.078,31.775c-4.878-2.61-10.796-2.324-15.398,0.744L90.459,90H15c-8.284,0-15,6.716-15,15v120
		c0,8.284,6.716,15,15,15h75.459l86.221,57.481c2.51,1.673,5.411,2.519,8.321,2.519c2.427,0,4.859-0.588,7.077-1.775
		c4.877-2.61,7.922-7.693,7.922-13.225V45C200,39.468,196.955,34.385,192.078,31.775z M170,256.972l-66.68-44.453
		C100.856,210.876,97.961,210,95,210H30v-90h65c2.961,0,5.856-0.876,8.32-2.519L170,73.028V256.972z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
</button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetics[1].text || ""}/</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
                 ${data[0].meanings[0].definitions[0].example || ""}
            </p>`;
      sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
    })
    .catch(() => (result.innerHTML = `<h3>Word not found</h3>`));
});

function playSound() {
  sound.play();
}
