import x from "./icons/x.svg";

const SettingsModal = ({ setOpenModal, children }) => {
  return (
    <div className="w-[100%] h-[100%] bg-black/50 absolute top-0 left-0 flex   z-9999 ">
      <div
        className={`transition-all  w-[200px] h-[100%]  bg-zinc-800 shadow-lg relative z-999 overflow-hidden p-2 backdrop-blur-[20px]`}
      >
        {children}
        <span
          onClick={() => setOpenModal(false)}
          className="float-right cursor-pointer hover:bg-white/10 rounded-sm"
        >
          <img src={x} alt="" />
        </span>
      </div>
    </div>
  );
};
export default SettingsModal;
