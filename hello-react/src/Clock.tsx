type Props = {
  onNowUpdate: (now: Date) => void;
}

function Clock({ onNowUpdate }: Props) {
  const now = new Date();
  onNowUpdate(now);
  return (
    <div className="Clock">
      {now.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
