import { FiSend } from "react-icons/fi";
import PropTypes from "prop-types";

const ButtonWrapper = ({ onClick, children }) => {
  return (
    <div className=" min-h-[200px] flex items-center justify-center">
      <NeumorphismButton onClick={onClick}>{children}</NeumorphismButton>
    </div>
  );
};

const NeumorphismButton = ({ onClick = () => {}, children }) => {
  return (
    <button
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        font-[Pochaevsk]
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    `}
      onClick={onClick}
    >
      <FiSend />
      <span>{children}</span>
    </button>
  );
};

ButtonWrapper.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

NeumorphismButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default ButtonWrapper;
