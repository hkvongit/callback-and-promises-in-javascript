//
import "./styles.css";

console.log("program starts here");

function watchTutorialCallback(callback, errorCallback) {
  let userLeft = false;
  let userWatchingCatMeme = true;
  // if (!chakka) {
  //   console.log("bhai ivide chakka illa");
  // } else {
  //   console.log("kitti kitti chakka kitti ->", chakka);
  // }
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: "MESSAGE IS: user left , nothing else"
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching something else",
      message: "[Message]-User Watching Cat Memet"
    });
  } else {
    callback("Thumbs up and Subscribe");
  }
}

const parent = () => {
  const chakka = "chakka is here inside parent";
  console.log("calling watchTut func");
  watchTutorialCallback(
    (message) => {
      console.log("1st argument ->", message);
    },
    (error) => {
      console.log(
        "2nd argument ->" +
          error.name +
          " " +
          error.message +
          "::::chakka -> " +
          chakka
      );
    }
  );
};

console.log("calling parent");
parent();

/*
function watchTutorialPromise() {
  let userLeft = false;
  let userWatchingCatMeme = false;
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":("
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat"
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
}


watchTutorialPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);

*/
