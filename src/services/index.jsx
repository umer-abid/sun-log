var requestOptions = {
  method: "GET",
  redirect: "follow",
};
export const getLongitudeLatitude = async (ip) => {
  let result = await fetch(
    `https://api.ipbase.com/v2/info?apikey=Qk70zPbcD9dBpJroMfOMVCicA2gXkH4nifKtUP0F&ip=${ip}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((res) => res.data.location)
    .catch((error) => console.log("error", error));
  return result;
};

export const getSunRiseSunSet = async (lati, long) => {
  let result = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lati}&lng=${long}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((res) => res.results)
    .catch((error) => console.log("error", error));
  return result;
};
