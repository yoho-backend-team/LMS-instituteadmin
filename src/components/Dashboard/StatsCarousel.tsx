import { useEffect, useRef, useState } from "react";
import TotalEarnings from "../../assets/TotalEarningsicon.png";
import Project from "../../assets/Projects.png";
import Instructor from "../../assets/Instructoricon.png";

const statCards = [
  {
    title: "Total Earnings",
    value: "21440",
    color: "142, 249, 252",
    icon: TotalEarnings,
  },
  {
    title: "Projects",
    value: "10000",
    color: "142, 252, 204",
    icon: Project,
  },
  {
    title: "Instructor",
    value: "543",
    color: "142, 252, 157",
    icon: Instructor,
  },
  {
    title: "Students",
    value: "10000",
    color: "252, 142, 239",
    icon: Instructor,
  },
  {
    title: "Revenue",
    value: "8000",
    color: "142, 202, 252",
    icon: TotalEarnings,
  },
];

export default function StatsCarousal() {
  const innerRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const cardCount = statCards.length;
    if (innerRef.current) {
      innerRef.current.style.setProperty("--quantity", cardCount);
    }
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="wrapper w-full h-[300px] relative flex items-center justify-center overflow-hidden">
      <div
        className="inner"
        ref={innerRef}
        style={{
          width: "100px",
          height: "150px",
        }}
      >
        {statCards.map((card, index) => (
          <div
  className="card cursor-pointer"
  key={index}
  onClick={() => handleCardClick(card)}
  style={{
    "--index": index,
    "--color-card": card.color,
    "--quantity": statCards.length, // ✅ Add this
  }}
>

            <div className="img flex flex-col items-center justify-center p-4 text-white text-center">
              <div className="h-12 w-12 bg-white rounded-lg mb-2 flex items-center justify-center">
                <img src={card.icon} alt={card.title} className="h-8 w-8" />
              </div>
              <p className="text-sm font-semibold">{card.title}</p>
              <p className="text-lg font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Single Card View */}
      {selectedCard && (
        <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-lg shadow-xl" style={{ width: '200px', height: '300px', background: `#0000 radial-gradient(circle, rgba(${selectedCard.color}, 0.2) 0%, rgba(${selectedCard.color}, 0.6) 80%, rgba(${selectedCard.color}, 0.9) 100%)`, border: `2px solid rgba(${selectedCard.color})` }}>
          <div className="flex flex-col items-center justify-center p-4 text-white text-center relative h-full">
            <button onClick={handleClose} className="absolute top-2 right-3 text-white text-xl font-bold">×</button>
            <div className="h-16 w-16 bg-white rounded-lg mb-3 flex items-center justify-center">
              <img src={selectedCard.icon} alt={selectedCard.title} className="h-10 w-10" />
            </div>
            <p className="text-base font-semibold mb-1">{selectedCard.title}</p>
            <p className="text-2xl font-bold">{selectedCard.value}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .inner {
          --w: 100px;
          --h: 150px;
          --translateZ: calc((var(--w) + var(--h)) + 0px);
          --rotateX: -15deg;
          --perspective: 1000px;
          position: absolute;
          top: 25%;
          left: calc(50% - (var(--w) / 2) - 2.5px);
          z-index: 2;
          transform-style: preserve-3d;
          transform: perspective(var(--perspective));
          animation: rotating 20s linear infinite;
        }

        @keyframes rotating {
          from {
            transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
          }
          to {
            transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
          }
        }

        .card {
          position: absolute;
          border: 2px solid rgba(var(--color-card));
          border-radius: 12px;
          overflow: hidden;
          inset: 0;
          transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
        }

        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: #0000 radial-gradient(
            circle,
            rgba(var(--color-card), 0.2) 0%,
            rgba(var(--color-card), 0.6) 80%,
            rgba(var(--color-card), 0.9) 100%
          );
        }
      `}</style>
    </div>
  );
}
