document.getElementById('colorButton').addEventListener('click', async () => {
  // Replace <API-ENDPOINT> with the API Gateway endpoint
  const response = await fetch('https://j7969dr6u7.execute-api.ap-northeast-2.amazonaws.com/dev/color');
  const data = await response.json();
  document.body.style.backgroundColor = data.color;
});
