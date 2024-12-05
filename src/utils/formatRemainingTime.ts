function formatRemainingTime(remainingTime: number){
  const minutes = Math.floor(remainingTime / 60).toString().padStart(2, "0");
  const seconds = Math.floor(remainingTime % 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
}

export default formatRemainingTime;