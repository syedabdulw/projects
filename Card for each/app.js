const data = [
  {
      title: "Card 1",
      description: "This is the description for card 1.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwO8Ab3sp7fRc7S2x4NhgAgNCrP2ttzWuQ8Q&s"
  },
  {
      title: "Card 2",
      description: "This is the description for card 2.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWt26-_oHscVCtq4upAts8CCoHGEm0me5x-Q&s"
  },
  {
      title: "Card 3",
      description: "This is the description for card 3.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLwSVMuFamGki18RsZXQ2R80pBEtujubVrg&s"
  },
  {
      title: "Card 4",
      description: "This is the description for card 4.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhK_lyCRIBiLa0mLTvhcsdohz5s1teikyBQ&s"
  }
];

const cardContainer = document.getElementById('card-container');

data.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = item.imageUrl;

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  const cardTitle = document.createElement('h3');
  cardTitle.className = 'card-title';
  cardTitle.textContent = item.title;

  const cardDescription = document.createElement('p');
  cardDescription.className = 'card-description';
  cardDescription.textContent = item.description;

  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);
  card.appendChild(img);
  card.appendChild(cardContent);
  cardContainer.appendChild(card);
});
