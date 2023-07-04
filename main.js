const getDataJSON = async (path, callback) => {
  return callback(await fetch(path).then((res) => res.json()))
}

const summaryListsContainer = document.querySelector(".summary-lists")
const dataAccentColors = [
  "0, 100%, 67%",
  "39, 100%, 56%",
  "166, 100%, 37%",
  "234, 85%, 45%",
]

const renderLists = async () => {
  await getDataJSON("./data.json", (data) => {
    data.forEach(({ category, score, icon }, i) => {
      const markup = `
        <li style="--clr-accent: ${dataAccentColors[i]};" class="summary-lists-item">
          <div class="item-title">
            <img class="item-icon" src="${icon}" alt="${category} icon" />

            ${category}
          </div>

          <div class="item-scores">
            <span>${score}</span>
            <span>/</span>
            <span>100</span>
          </div>
        </li>
      `

      summaryListsContainer.insertAdjacentHTML("beforeend", markup)
    })
  })
}

renderLists()
