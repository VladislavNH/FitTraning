import { useEffect, useState } from "react";

export default function FirstVisitNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 700);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="toast-notice">
      <div className="toast-content">
        <img
          src="/trainer.jpg"
          alt="Тренер"
          className="toast-avatar"
        />

        <div className="toast-text">
          <strong>Нужна консультация?</strong>
          <span>Я на связи и готов помочь тебе.</span>
        </div>

        <a
          href="https://t.me/StaniMDST"
          target="_blank"
          rel="noreferrer"
          className="toast-btn"
        >
          Написать
        </a>

        <button className="toast-close" onClick={() => setVisible(false)}>
          ×
        </button>
      </div>
    </div>
  );
}
