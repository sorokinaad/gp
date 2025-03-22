document.addEventListener('DOMContentLoaded', function () {
    // Обработка для "Географический регион"
    const selectAllGeo = document.getElementById('select-all-geo');
    const regionCheckboxesGeo = document.querySelectorAll('#geo-regions .region-checkbox');
  
    if (selectAllGeo && regionCheckboxesGeo.length > 0) {
      selectAllGeo.addEventListener('change', function () {
        regionCheckboxesGeo.forEach(checkbox => {
          checkbox.checked = selectAllGeo.checked;
        });
      });
  
      regionCheckboxesGeo.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
          if (!checkbox.checked) {
            selectAllGeo.checked = false;
          } else {
            const allChecked = Array.from(regionCheckboxesGeo).every(cb => cb.checked);
            selectAllGeo.checked = allChecked;
          }
        });
      });
    }
  
    // Обработка для "Регион спроса"
    const selectAllRegion = document.getElementById('select-all-region');
    const regionCheckboxesRegion = document.querySelectorAll('#demand-regions .region-checkbox');
  
    if (selectAllRegion && regionCheckboxesRegion.length > 0) {
      selectAllRegion.addEventListener('change', function () {
        regionCheckboxesRegion.forEach(checkbox => {
          checkbox.checked = selectAllRegion.checked;
        });
      });
  
      regionCheckboxesRegion.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
          if (!checkbox.checked) {
            selectAllRegion.checked = false;
          } else {
            const allChecked = Array.from(regionCheckboxesRegion).every(cb => cb.checked);
            selectAllRegion.checked = allChecked;
          }
        });
      });
    }
  });