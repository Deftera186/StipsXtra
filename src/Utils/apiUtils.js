export function sendThanksMsg(msg, touserid) {
  const formData =
    "name=omniobj&rest_action=PUT&omniobj=" +
    encodeURIComponent(
      JSON.stringify({
        data: {
          msg: msg,
          touserid: touserid,
        },
        objType: "thanksmsg",
      })
    );

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://stips.co.il/api");
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded;charset=UTF-8"
  );
  xhr.send(formData);
}

export async function getAnswersForQuestion(askid) {
  const formData =
    "name=objectlist&api_params=" +
    encodeURIComponent(
      JSON.stringify({
        askid: askid,
        method: "ans.for_item",
        page: 1,
      })
    );

  const response = await fetch("https://stips.co.il/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "accept": "application/json",
    },
    body: formData,
  });

  const jsonResponse = await response.json();
  return jsonResponse;
}