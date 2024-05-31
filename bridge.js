const PERMITTED_DOMAINS = ["http://127.0.0.1:3000"];

// Note that that recieveMessage will listen for any 'postMessage' events.
// It is important to read the documentation for the 'postMessage' API in the browser.
function receiveMessage(event) {
  if (!PERMITTED_DOMAINS.includes(event.origin)) {
    return;
  }

  const { message, type, url } = event.data;

  console.log("Received message", event.data);

  switch (type) {
    case "openToast": {
      Liferay.Util.openToast({
        message: message,
        title: message,
        type: "info",
      });
    }
    case "navigate": {
      Liferay.Util.navigate(url);
    }
  }
}

window.addEventListener("message", receiveMessage);
