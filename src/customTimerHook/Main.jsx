import useCustomTimer from "./useCustomTimer.jsx";

function Main() {
  const { isRunning, start, stop, seconds } = useCustomTimer(5);
  return (
    <div className="countdown">
      <h2>Countdown Timer Custom Hook</h2>
      <h4>{isRunning ? seconds : "No Timer Running"}</h4>
      <button disabled={isRunning} onClick={start}>
        Start
      </button>
      <button disabled={!isRunning} onClick={stop}>
        Stop
      </button>
    </div>
  );
}

export default Main;
