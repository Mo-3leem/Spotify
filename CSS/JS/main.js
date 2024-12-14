function click_card() {
  console.log('cleced');
  if (document.getElementById("div3").style.display == "inline-block") {
    document.getElementById("div3").style.display = "none";
  } else {
    document.getElementById("div3").style.display = "inline-block";
  }
}

document.addEventListener("scroll", function () {
  const navbar = document.getElementById("sec-navbar");

  if (window.scrollY < 315) {
    navbar.classList.remove("scroll_down");
  } else {
    navbar.classList.add("scroll_down");
  }
});

// ***************************************************************************************

// Function to repeat a song card
function repeatSongCard(times) {
  // Select the container and template
  const container = document.getElementById('songs-container');
  const template = document.getElementById('song-card-template');

  // Clear the container before adding new cards
  container.innerHTML = '';

  // Loop to create the specified number of cards
  for (let i = 0; i < times; i++) {
    // Clone the template content
    const card = template.content.cloneNode(true);

    // Customize the card if needed (e.g., unique titles or data)
    card.querySelector('h3').textContent = `Song Title ${i + 1}`;
    card.querySelector('p').textContent = `Artist Name ${i + 1}`;

    // Append the card to the container
    container.appendChild(card);
  }
}

// Example: Repeat the card 5 times
repeatSongCard(20);


