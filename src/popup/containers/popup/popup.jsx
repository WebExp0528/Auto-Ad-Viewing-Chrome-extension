import React from "react";
import Button from "../../components/button/button";
import sendMessage from "../../services/comunicationManager";
import { MSG_START, MSG_IS_STARTED, MSG_STOP } from "utils/msgTypes";

export default () => {
    const [isStarted, setStarted] = React.useState(false);

    React.useEffect(() => {
        sendMessage(MSG_IS_STARTED).then(res => {
            console.log("~~~~~~~~~~~~ is_started", res);
            setStarted(res);
        });
    }, []);

    const handleClickStart = () => {
        sendMessage(isStarted ? MSG_STOP : MSG_START);
        setStarted(!isStarted);
    };

    return (
        <div>
            <Button
                label={isStarted ? "Stop" : "Start"}
                action={handleClickStart}
            />
        </div>
    );
};
