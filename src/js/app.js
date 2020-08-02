window.addEventListener('load', () => {
  const perImageTotalMinutesEl = document.querySelector('#perImageTotalMinutes')
  const perImageTotalHoursEl = document.querySelector('#perImageTotalHours')
  const perImageTotalCostEl = document.querySelector('#perImageTotalCost')
  const perImageTotalCostHalfEl = document.querySelector('#perImageTotalCostHalf')

  const quantityEl = document.querySelector('#quantity')
  const perImageHourlyRateEl = document.querySelector('#perImageHourlyRate')
  const revisionAllowanceEl = document.querySelector('#revisionAllowance')
  const fileHandlingIntakeEl = document.querySelector('#fileHandlingIntake')
  const rawProcessingEl = document.querySelector('#rawProcessing')
  const clippingIsolationEl = document.querySelector('#clippingIsolation')
  const cleanupEl = document.querySelector('#cleanup')
  const colorCorrectionEl = document.querySelector('#colorCorrection')
  const integrationEl = document.querySelector('#integration')
  const moodGraceEl = document.querySelector('#moodGrace')
  const fileOutputEl = document.querySelector('#fileOutput')
  const deliveryEl = document.querySelector('#delivery')
  const clearPerImageEl = document.querySelector('#clearPerImage')
  clearPerImageEl.addEventListener('keyup', () => {
    location.reload()
  })

  const perImageRound1Minutes = () => {
    return Number(fileHandlingIntakeEl.value) + Number(rawProcessingEl.value) + Number(clippingIsolationEl.value) + Number(cleanupEl.value) + Number(colorCorrectionEl.value) + Number(integrationEl.value) + Number(moodGraceEl.value) + Number(fileOutputEl.value) + Number(deliveryEl.value)
  }

  const perImageRound1MinutesWithRevisions = () => {
    const revisionMinutes = perImageRound1Minutes() * 0.20
    return revisionMinutes + perImageRound1Minutes()
  }

  const perImageTotalMinutes = () => {
    return perImageRound1MinutesWithRevisions() * Number(quantityEl.value)
  }

  const perImageTotalHours = () => {
    return perImageTotalMinutes() / 60
  }

  const perImageTotalCost = () => {
    return perImageTotalHours() * Number(perImageHourlyRateEl.value)
  }

  const perImageBuildTotals = () => {
    perImageTotalMinutesEl.innerHTML = parseInt(perImageTotalMinutes())
    perImageTotalHoursEl.innerHTML = perImageTotalHours().toFixed(2)
    perImageTotalCostEl.innerHTML = '$' + perImageTotalCost().toFixed(2)
    perImageTotalCostHalfEl.innerHTML = '$' + (perImageTotalCost() / 2).toFixed(2)
  }
  perImageBuildTotals()

  quantityEl.addEventListener('keyup', perImageBuildTotals)
  perImageHourlyRateEl.addEventListener('keyup', perImageBuildTotals)
  revisionAllowanceEl.addEventListener('keyup', perImageBuildTotals)
  fileHandlingIntakeEl.addEventListener('keyup', perImageBuildTotals)
  rawProcessingEl.addEventListener('keyup', perImageBuildTotals)
  clippingIsolationEl.addEventListener('keyup', perImageBuildTotals)
  cleanupEl.addEventListener('keyup', perImageBuildTotals)
  colorCorrectionEl.addEventListener('keyup', perImageBuildTotals)
  integrationEl.addEventListener('keyup', perImageBuildTotals)
  moodGraceEl.addEventListener('keyup', perImageBuildTotals)
  fileOutputEl.addEventListener('keyup', perImageBuildTotals)
  deliveryEl.addEventListener('keyup', perImageBuildTotals)
})
