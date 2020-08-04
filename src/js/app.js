window.addEventListener('load', () => {
  const itemTimeControlsEl = document.querySelectorAll('.taskTimes input')

  const allInputs = document.querySelectorAll('input')
  allInputs.forEach(element => {
    element.addEventListener('change',event => perImageBuildTotals())
  })

  const perImageRound1Minutes = () => {
    const itemTimeControlArr = Array.from(itemTimeControlsEl)
    const itemTimeTotal = itemTimeControlArr.reduce((accum, item) => accum + Number(item.value), 0)
    return itemTimeTotal
  }

  const perImageRound1MinutesWithRevisions = () => {
    const revisionMinutes = perImageRound1Minutes() * 0.20
    return revisionMinutes + perImageRound1Minutes()
  }

  const perImageTotalMinutes = () => {
    return perImageRound1MinutesWithRevisions() * Number(document.querySelector('#quantity').value)
  }

  const perImageTotalHours = () => {
    return perImageTotalMinutes() / 60
  }

  const perImageTotalCost = () => {
    return perImageTotalHours() * Number(document.querySelector('#perImageHourlyRate').value)
  }

  const clearPerImageEl = document.querySelector('#clearPerImage')
  clearPerImageEl.addEventListener('keyup', () => {
    location.reload()
  })

  const perImageBuildTotals = () => {
    document.querySelector('#perImageTotalMinutes').innerHTML = parseInt(perImageTotalMinutes())
    document.querySelector('#perImageTotalHours').innerHTML = perImageTotalHours().toFixed(2)
    document.querySelector('#perImageTotalCost').innerHTML = '$' + perImageTotalCost().toFixed(2)
    document.querySelector('#perImageTotalCostHalf').innerHTML = '$' + (perImageTotalCost() / 2).toFixed(2)
  }
  perImageBuildTotals()
})
