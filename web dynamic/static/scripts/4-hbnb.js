$(document).ready(function(){

    const selectedAmenities = {};
  
    $(".check").click(function(){
      const amenityId = $(this).data('amenityId');
      selectedAmenities[amenityId] = true;
      $("ul[data-id='" + amenityId + "']").prop("checked", true);
    });
  
    $(".uncheck").click(function(){
      const amenityId = $(this).data('amenityId');
      delete selectedAmenities[amenityId];
      $("ul[data-id='" + amenityId + "']").prop("checked", false);
    });

    $("button").click(async function() {
      try {
        const response = await fetch('/api/v1/places_search', {
          method: 'POST',
          body: JSON.stringify(selectedAmenities),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log('Search results:', data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    });
  
  });
  