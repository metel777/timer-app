import { useState } from "react";
import clock from "./icons/alarm-fill.svg";
import edit from "./icons/edit.svg";
import plus from "./icons/plus.svg";
import settings from "./icons/settings.svg";
import check from "./icons/check2.svg";

import { Tooltip } from "react-tooltip";
import TimerCard from "./TimerCard";
import SettingsModal from "./SettingsModal";
import AddModal from "./AddModal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openTimer, setOpenTimer] = useState(false);

  const [color, setColor] = useState("#22d3ee");

  const [timerArray, setTimerArray] = useState([]);

  const time1 = new Date();

  // ADD MODAL
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerName, setTimerName] = useState("");
  const [editTimers, setEditTimers] = useState(false);

  return (
    <div className="text-white cursor-default">
      <main className="m-auto w-fit max-w-[950px]   min-w-[350px] min-h-[500px]  border border-white/10 rounded-xl mt-10  bg-white/5 shadow-lg p-3 overflow-hidden relative">
        {/* NAVBAR */}
        <div className="flex gap-4">
          {/* SETTINGS */}
          <span
            onClick={() => setOpenModal((prev) => !prev)}
            className="cursor-pointer transition-all rounded-md hover:bg-white/10 p-1"
          >
            <img src={settings} width={28} alt="" />
          </span>
          {/* APP NAME */}
          <span className="flex items-center gap-1">
            <img width={20} src={clock} alt="" />
            <h1 className="text-sm">Timer app</h1>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative  justify-items-center">
          {/* TIMER */}
          {timerArray.map((timer) => (
            <TimerCard
              color={color}
              key={timer.id}
              id={timer.id}
              timerHours={timer.hours}
              timerMinutes={timer.minutes}
              timerSeconds={timer.seconds}
              timerTitle={timer.title}
              editTimers={editTimers}
              timerArray={timerArray}
              setTimerArray={setTimerArray}
            />
          ))}
        </div>

        {/* FLOATING BUTTONS */}
        <section className="mt-2 absolute bottom-3 right-3 backdrop-blur-[10px]">
          <div className="bg-white/5 rounded-lg shadow-xl border border-white/15 p-1 transition-all flex w-fit">
            {/* BTN 1 */}
            <span
              onClick={() => setEditTimers((prev) => !prev)}
              id={editTimers ? "done" : "edit"}
              className="cursor-pointer transition-all rounded-md p-1.5 hover:bg-white/5"
            >
              <img src={editTimers ? check : edit} alt="" />
            </span>

            <Tooltip
              delayShow={700}
              border="1px solid rgb(255 255 255 / 0.2)"
              style={{
                borderRadius: "8px",
                padding: "5px 10px",
                fontSize: "12px",
              }}
              anchorSelect={editTimers ? "#done" : "#edit"}
              content={editTimers ? "Done" : "Edit"}
            />

            {/* BTN 2 */}
            <span
              id="add"
              className="cursor-pointer transition-all rounded-md p-1.5 hover:bg-white/5"
              onClick={() => setOpenTimer(true)}
            >
              <img src={plus} alt="" />
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
              anchorSelect="#add"
              content="Add new timer"
            />
          </div>
        </section>
        {/* SETTINGS MODAL */}
        {openModal && (
          <SettingsModal setOpenModal={setOpenModal}>Settings</SettingsModal>
        )}
        {openTimer && (
          <AddModal
            color={color}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            setHours={setHours}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
            timerName={timerName}
            setTimerName={setTimerName}
            setOpenModal={setOpenTimer}
            timerArray={timerArray}
            setTimerArray={setTimerArray}
          ></AddModal>
        )}
      </main>
      <p className="opacity-20 text-xs w-fit m-auto">
        Windows timer app ©Yehor Brazhenko 2024
      </p>
    </div>
  );
}

export default App;
