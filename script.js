const cards = document.querySelectorAll('.pricing-card')

const highlightCard = (card) => {
  const cardBtn = card.querySelector('.purchase-btn')
  cardBtn.classList.add('hovered')
  card.classList.add('hovered')
}

const unHighlightCard = (card) => {
  const cardBtn = card.querySelector('.purchase-btn')
  cardBtn.classList.remove('hovered')
  card.classList.remove('hovered')
}

cards.forEach((card) => {
  card.addEventListener('mouseover', () => highlightCard(card))
  card.addEventListener('mouseleave', () => unHighlightCard(card))
})
