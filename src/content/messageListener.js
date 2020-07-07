import { MSG_START, MSG_IS_STARTED, MSG_STOP } from "utils/msgTypes";
import { delay } from "./../utils/helper.js";

let is_started = false;

const onRequest = (message, sender, reply) => {
    switch (message.type) {
        case MSG_START: {
            is_started = true;
            startCheckOut();
            reply();
            break;
        }
        case MSG_IS_STARTED: {
            reply(is_started);
            break;
        }
        case MSG_STOP: {
            is_started = false;
            reply();
            break;
        }
    }
    return true;
};

const startCheckOut = async () => {
    if (!is_started) {
        console.log("~~~~~~~~~~~~~~~ stopped");
        return;
    }
    const form = document.querySelector("form[name='mainf']");
    if (!form) return;

    const imgContainer = form.firstElementChild;

    const allImages = imgContainer.querySelectorAll("img");
    if (!allImages) return;

    const allNumbers = Array.from(allImages).map(img => {
        const url = img.src;

        const splitedUrl = url.split("/");
        console.log("~~~~~~~~~~~~~~ img", url);
        const fileName = splitedUrl[splitedUrl.length - 1];
        console.log("~~~~~~~~~~~~~~ filename", fileName);
        const spitedFileName = fileName.split(".");
        return spitedFileName[0];
    });

    console.log("~~~~~~~~~~~~ all numbers", allNumbers.join());

    const allInputs = Array.from(form.querySelectorAll("input"));
    allInputs[0].value = allNumbers.join("");
    allInputs[1].click();
    await delay(200);
    startCheckOut();
};

export default onRequest;
