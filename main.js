const api_url = "https://flynn.boolean.careers/exercises/api/random/mail";

const mailList = document.getElementById("mail-list");

console.log(api_url, mailList);

// qui con la chiamata axios mi fa generare solo una mail
axios.get(api_url).then((response) => {
  //console.log(response);
  const resultList = [response.data.response];
  console.log(resultList);

  mailList.innerHTML = resultList;

  for (let i = 0; i < resultList.length; i++) {
    const thisResList = [resultList[i]];
    console.log(thisResList);
  }
});
