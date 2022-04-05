document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "data.txt", true);

  //   console.log("READYSTAE", xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log("READYSTAE", xhr.readyState);
  };

  xhr.onload = function () {
    console.log("READYSTAE", xhr.readyState);
    if (this.status === 200) {
      //   console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  //   xhr.onreadystatechange = function () {
  //     console.log("READYSTAE", xhr.readyState);
  //     if (this.status === 200 && this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //   };

  xhr.onerror = function () {
    console.log("Request errror....");
  };

  xhr.send();
}
