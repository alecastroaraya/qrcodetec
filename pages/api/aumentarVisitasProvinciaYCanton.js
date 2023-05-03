navigator.geolocation.getCurrentPosition(
  (position) => {
    const geocoder = new google.maps.Geocoder();
    const latLng = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );

    geocoder.geocode({ latLng }, (results: any, status: any) => {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          for (let i = 0; i < results[0].address_components.length; i++) {
            const addressType = results[0].address_components[i].types[0];
            if (addressType === 'administrative_area_level_1') {
              provincia = results[0].address_components[i].long_name
            }
            if (addressType === 'locality') {
              canton = results[0].address_components[i].long_name
            }
          }
        }
      }
      fetch("http://127.0.0.1:3000/api/readQR", {
        method: "POST",
        body: JSON.stringify({
          provincia,
          canton
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
    });
  },
  (error) => {
    console.log(error);
  }
);