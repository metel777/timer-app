import x from "./icons/x.svg";
import edit from "./icons/edit input.svg";
import save from "./icons/save.svg";
import up from "./icons/up.svg";
import down from "./icons/down.svg";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
const AddModal = ({
  setOpenModal,
  hours,
  minutes,
  seconds,
  setHours,
  setMinutes,
  setSeconds,
  timerName,
  setTimerName,
  timerArray,
  setTimerArray,
}) => {
  function incHours() {
    if (hours >= 24) {
      setHours(24);
    } else {
      setHours((prev) => prev + 1);
    }
  }
  function incMinutes() {
    if (minutes >= 60) {
      setHours((prev) => prev + 1);
      setMinutes(0);
    } else {
      setMinutes((prev) => prev + 1);
    }
  }
  function incSeconds() {
    if (seconds >= 60) {
      setMinutes((prev) => prev + 1);
      setSeconds(0);
    } else {
      setSeconds((prev) => prev + 1);
    }
  }

  function decHours() {
    if (hours <= 0) {
      setHours(0);
    } else {
      setHours((prev) => prev - 1);
    }
  }
  function decMinutes() {
    if (minutes <= 0) {
      setMinutes(0);
    } else {
      setMinutes((prev) => prev - 1);
    }
  }
  function decSeconds() {
    if (seconds <= 0) {
      setSeconds(0);
    } else {
      setSeconds((prev) => prev - 1);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTimer = {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      title: timerName,
      id: timerName,
    };
    setTimerArray((prevTimerArray) => [...prevTimerArray, newTimer]);
    setOpenModal(false);
  }
  useEffect(() => {
    setTimerName(`Timer (${timerArray.length})`);
  }, []);

  return (
    <div className="w-[100%] h-[100%] bg-black/50 absolute top-0 left-0 flex justify-center items-center  z-9999 p-4">
      <div
        className={`transition-all  max-w-[350px]   bg-white/5 shadow-lg m-auto  rounded-lg overflow-hidden p-5 backdrop-blur-[20px] relative`}
      >
        <h1 className="font-semibold text-lg">Add new timer</h1>
        {/* ARROWS */}
        <div className="flex justify-around">
          {/* HOURS */}
          <img
            className="hover:bg-white/10 rounded-md"
            width={40}
            src={up}
            alt=""
            onClick={incHours}
          />
          {/* MINUTES */}
          <img
            className="hover:bg-white/10 rounded-md"
            width={40}
            src={up}
            alt=""
            onClick={incMinutes}
          />
          {/* SECONDS */}
          <img
            className="hover:bg-white/10 rounded-md"
            width={40}
            src={up}
            alt=""
            onClick={incSeconds}
          />
        </div>
        {/* TIME */}
        <div className="border border-b-2 bg-zinc-800 border-b-cyan-300 border-white/20 w-[250px] h-[80px] rounded-md flex gap-2 justify-center p-1">
          {/* HOURS */}
          <div className="w-[33%] h-[100%] bg-black rounded-md text-[40px] text-center font-bold">
            {hours}
          </div>

          <div className="text-[40px]">:</div>

          {/* MINUTES */}
          <div className="w-[33%] h-[100%] bg-black rounded-md text-[40px] text-center font-bold">
            {minutes}
          </div>

          <div className="text-[40px]">:</div>

          {/* SECONDS */}
          <div className="w-[33%] h-[100%] bg-black rounded-md text-[40px] text-center font-bold">
            {seconds}
          </div>
        </div>
        {/* ARROWS */}
        <div className="flex justify-around">
          {/* HOURS */}
          <img
            className="hover:bg-white/10 rounded-md"
            width={40}
            src={down}
            alt=""
            onClick={decHours}
          />
          {/* MINUTES */}
          <img
            className="hover:bg-white/10 rounded-md"
            width={40}
            src={down}
            alt=""
            onClick={decMinutes}
          />
          {/* SECONDS */}
          <img
            className="hover:bg-white/10 rounded-md"
            width={40}
            src={down}
            alt=""
            onClick={decSeconds}
          />
        </div>
        {/* FORM */}
        <form className="flex flex-col gap-8" onSubmit={(e) => handleSubmit(e)}>
          {/* INPUT */}
          <span id="timer-name" className="flex items-center gap-2 mt-6">
            <img src={edit} alt="" />
            <input
              value={timerName}
              onChange={(e) => setTimerName(e.target.value)}
              placeholder="Timer name"
              type="text"
              className="rounded bg-white/10 border-b  text-sm font-light p-1 w-[100%] focus:outline-0 focus:bg-white/5 focus:border-b-cyan-300"
            />
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
            anchorSelect="#timer-name"
            content="Input timer name"
          />
          {/* DIVIDER */}
          <div className="border-b border-black/30 "></div>
          {/* BUTTONS */}
          <div className="flex gap-2">
            <button className="flex justify-center items-center gap-1 w-[50%] bg-cyan-300 text-black rounded text-sm py-1 hover:bg-cyan-300/90">
              <img width={16} src={save} alt="" />
              Save
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="flex justify-center items-center gap-1 w-[50%] bg-white/10 rounded text-sm py-1 hover:bg-white/15 border border-white/5"
            >
              <img width={16} src={x} alt="" /> Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddModal;
