import play from "./icons/play.svg";
import pauseBtn from "./icons/pause.svg";
import reset from "./icons/reset.svg";
import deleteIcon from "./icons/delete.svg";
import { Tooltip } from "react-tooltip";

import { useTimer } from "react-timer-hook";
import { useState } from "react";
import {
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";

const TimerCard = ({
  title,
  timerHours,
  timerMinutes,
  timerSeconds,
  timerTitle,
  editTimers,
  color,
  timerArray,
  setTimerArray,
  id,
}) => {
  const [playState, setPlayState] = useState(false);

  const time = new Date();

  time.setHours(time.getHours() + timerHours);
  time.setMinutes(time.getMinutes() + timerMinutes);
  time.setSeconds(time.getSeconds() + timerSeconds);

  function expire() {
    pause();
    restart(time);
    setPlayState(false);
  }
  function deleteTimerCard() {
    const timer = [...timerArray];
    const cut = timer.filter((item) => item.id !== id);
    setTimerArray(cut);
  }
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => {
      restart(time);
      pause();
      setPlayState(false);
    },
  });

  const totalSec = timerHours * 3600 + timerMinutes * 60 + timerSeconds;
  const elapsedTime = hours * 3600 + minutes * 60 + seconds;
  const progress = (elapsedTime / totalSec) * 100;

  return (
    <section className="mt-5 flex gap-3 justify-between">
      <div
        className={`w-[300px] h-[310px] bg-white/5 rounded-lg shadow-sm border border-black/30 p-2 text-sm transition-all hover:border-white/5 hover:-translate-y-1.5 hover:shadow-lg flex flex-col relative ${
          editTimers ? "text-neutral-500" : "text-white"
        }`}
      >
        {editTimers && (
          <img
            id="deleteIcon"
            src={deleteIcon}
            alt=""
            className="absolute right-1 top-1 hover:bg-white/10 p-0.5 rounded"
            onClick={deleteTimerCard}
          />
        )}
        <Tooltip
          delayShow={700}
          border="1px solid rgb(255 255 255 / 0.2)"
          style={{
            borderRadius: "8px",
            padding: "5px 10px",
            fontSize: "12px",
          }}
          anchorSelect="#deleteIcon"
          content="Delete"
        />
        <h1>{timerTitle}</h1>
        {/* TIME COUNT */}
        <div className="text-center  font-bold">
          <CircularProgress
            value={progress}
            color={color}
            size="200px"
            thickness="4px"
          >
            <CircularProgressLabel>
              <Text fontSize="24px">
                <span>{hours === 0 ? "" : hours + "h:"}</span>
                <span>{minutes === 0 ? "" : minutes + "m"}</span>
                <span>
                  {seconds === 0
                    ? ""
                    : minutes === 0
                    ? seconds + "s"
                    : ":" + seconds + "s"}
                </span>
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
        </div>
        <div className="flex w-fit h-fit  m-auto   bottom-2 left-0 right-0 gap-3">
          {!playState ? (
            <>
              <span
                onClick={() => {
                  resume();
                  setPlayState(true);
                }}
                id="play"
                style={{ backgroundColor: color }}
                className={`w-[30px] h-[30px] rounded-full border border-white/10 flex ${
                  editTimers && "hidden"
                }`}
              >
                <img src={play} alt="" />
              </span>
              <Tooltip
                delayShow={700}
                border="1px solid rgb(255 255 255 / 0.2)"
                style={{
                  borderRadius: "8px",
                  padding: "5px 10px",
                  fontSize: "12px",
                }}
                opacity="1"
                anchorSelect="#play"
                content="Play"
              />
            </>
          ) : (
            <>
              <span
                onClick={() => {
                  pause();
                  setPlayState(false);
                }}
                id="pauseBtn"
                style={{ backgroundColor: color }}
                className={`w-[30px] h-[30px]  rounded-full border border-white/10 flex ${
                  editTimers && "hidden"
                }`}
              >
                <img src={pauseBtn} alt="" />
              </span>
              <Tooltip
                delayShow={700}
                border="1px solid rgb(255 255 255 / 0.2)"
                style={{
                  borderRadius: "8px",
                  padding: "5px 10px",
                  fontSize: "12px",
                }}
                opacity="1"
                anchorSelect="#pauseBtn"
                content="Pause"
              />
            </>
          )}

          <span
            onClick={() => {
              restart(time);
              pause();
              setPlayState(false);
            }}
            id="reset"
            className={`w-[30px] h-[30px] bg-white/10 rounded-full border border-white/10 flex ${
              editTimers && "hidden"
            }`}
          >
            <img className="ml-0.5" width={23} src={reset} alt="" />
          </span>
          <Tooltip
            delayShow={700}
            border="1px solid rgb(255 255 255 / 0.2)"
            style={{
              borderRadius: "8px",
              padding: "5px 10px",
              fontSize: "12px",
            }}
            opacity="1"
            anchorSelect="#reset"
            content="Reset"
          />
        </div>
      </div>
    </section>
  );
};
export default TimerCard;
