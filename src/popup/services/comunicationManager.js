import ext from "../../utils/ext";

export default function sendMessage(message, data = {}) {
    return new Promise((resolve, reject) => {
        ext.tabs.query({ active: true, currentWindow: true }, tabs => {
            const activeTab = tabs[0];
            ext.tabs.sendMessage(activeTab.id, { type: message, data }, res => {
                resolve(res);
            });
        });
    });
}
