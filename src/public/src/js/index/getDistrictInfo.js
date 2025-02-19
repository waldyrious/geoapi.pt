/* global fetch, Option */

// select
const selectDistrict = document.getElementById('select-district')
// buttons
const btnGetDistrictInfo = document.getElementById('get-district-info-button')
const btnGetDistrictMunicipalities = document.getElementById('get-district-municipalities-button')
const btnGetDistrictParishes = document.getElementById('get-district-parishes-button')

btnGetDistrictInfo.addEventListener('click', () => {
  if (selectDistrict.value && selectDistrict.value !== '0') {
    window.location.href = `/distrito/${encodeURIComponent(selectDistrict.value)}`
  }
})

btnGetDistrictMunicipalities.addEventListener('click', () => {
  if (selectDistrict.value && selectDistrict.value !== '0') {
    window.location.href = `/distrito/${encodeURIComponent(selectDistrict.value)}/municipios`
  }
})

btnGetDistrictParishes.addEventListener('click', () => {
  if (selectDistrict.value && selectDistrict.value !== '0') {
    window.location.href = `/distrito/${encodeURIComponent(selectDistrict.value)}/freguesias`
  }
})

fetch('/distritos/base?json=1').then(res => res.json())
  .then((distritos) => {
    distritos.forEach(el => {
      selectDistrict.options.add(new Option(el, el))
    })
  })
  .catch((err) => {
    console.error('error fetching distritos', err)
  })
