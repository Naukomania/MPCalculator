import { useState } from "react";
import Plant from "./Plant";
import { scenario, scenarioAnswers } from "../../data/steps";

const coords = [];
let y = 30;
let x = 140;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    x = (j + 1) * 100 + 40;
    coords.push({ x, y });
  }
  y += 86;
}

const SvgField = ({
  kolvo_rasteniy,
  kolvo_ryadov,
  need_perekritie_vodi,
  shirina_mejdu_ryadov,
  dlina_posadki,
  shirina_between_plant,
  rasstoyanie_do_vodi,
  type = "hole",
}) => {
  const [choosenScenario, setChoosenScenario] = useState(null);
  return (
    <svg
      width={481}
      height={363}
      viewBox="0 0 481 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="field"
        className={`${
          !!choosenScenario ? choosenScenario + "-show" : type + "-show"
        }`}
      >
        {coords.map((coord, index) => {
          return <Plant x={coord.x} y={coord.y} key={index} />;
        })}
        <g id="between-rows">
          <text
            id="between-rows-text"
            x="430"
            y="115"
            fill="rgba(101, 172, 45, 1)"
            id="plant-number-text"
          >
            {shirina_mejdu_ryadov} м
          </text>

          <path
            id="Arrow 17"
            d="M419.646 147.354C419.842 147.549 420.158 147.549 420.354 147.354L423.536 144.172C423.731 143.976 423.731 143.66 423.536 143.464C423.34 143.269 423.024 143.269 422.828 143.464L420 146.293L417.172 143.464C416.976 143.269 416.66 143.269 416.464 143.464C416.269 143.66 416.269 143.976 416.464 144.172L419.646 147.354ZM420.354 74.6464C420.158 74.4512 419.842 74.4512 419.646 74.6464L416.464 77.8284C416.269 78.0237 416.269 78.3403 416.464 78.5355C416.66 78.7308 416.976 78.7308 417.172 78.5355L420 75.7071L422.828 78.5355C423.024 78.7308 423.34 78.7308 423.536 78.5355C423.731 78.3403 423.731 78.0237 423.536 77.8284L420.354 74.6464ZM420.5 147L420.5 75L419.5 75L419.5 147L420.5 147Z"
            fill="#65AC2D"
          />
        </g>
        <g id="between-plants">
          <text
            x="205"
            y="194"
            fill="rgba(101, 172, 45, 1)"
            id="between-plants-text"
          >
            {shirina_between_plant} м
          </text>

          <path
            id="Arrow 18"
            d="M236.354 200.354C236.549 200.158 236.549 199.842 236.354 199.646L233.172 196.464C232.976 196.269 232.66 196.269 232.464 196.464C232.269 196.66 232.269 196.976 232.464 197.172L235.293 200L232.464 202.828C232.269 203.024 232.269 203.34 232.464 203.536C232.66 203.731 232.976 203.731 233.172 203.536L236.354 200.354ZM185.646 199.646C185.451 199.842 185.451 200.158 185.646 200.354L188.828 203.536C189.024 203.731 189.34 203.731 189.536 203.536C189.731 203.34 189.731 203.024 189.536 202.828L186.707 200L189.536 197.172C189.731 196.976 189.731 196.66 189.536 196.464C189.34 196.269 189.024 196.269 188.828 196.464L185.646 199.646ZM236 199.5H186V200.5H236V199.5Z"
            fill="#65AC2D"
          />
        </g>
        <g id="dlina-posadki">
          <text
            x="250"
            y="10"
            fill="rgba(101, 172, 45, 1)"
            id="plant-number-text"
          >
            {dlina_posadki} м
          </text>
          <path
            id="Arrow 16"
            d="M130.646 17.6464C130.451 17.8417 130.451 18.1583 130.646 18.3536L133.828 21.5355C134.024 21.7308 134.34 21.7308 134.536 21.5355C134.731 21.3403 134.731 21.0237 134.536 20.8284L131.707 18L134.536 15.1716C134.731 14.9763 134.731 14.6597 134.536 14.4645C134.34 14.2692 134.024 14.2692 133.828 14.4645L130.646 17.6464ZM397.354 18.3536C397.549 18.1583 397.549 17.8417 397.354 17.6464L394.172 14.4645C393.976 14.2692 393.66 14.2692 393.464 14.4645C393.269 14.6597 393.269 14.9763 393.464 15.1716L396.293 18L393.464 20.8284C393.269 21.0237 393.269 21.3403 393.464 21.5355C393.66 21.7308 393.976 21.7308 394.172 21.5355L397.354 18.3536ZM131 18.5H397V17.5H131V18.5Z"
            fill="#65AC2D"
          />
        </g>
        <g id="do-vodi">
          <text
            id="do-vodi-text"
            x="56"
            y="81"
            fill="rgba(101, 172, 45, 1)"
            id="plant-number-text"
          >
            {rasstoyanie_do_vodi} м
          </text>

          <path
            id="Arrow 19"
            d="M25.6464 88.6464C25.4512 88.8417 25.4512 89.1583 25.6464 89.3536L28.8284 92.5355C29.0237 92.7308 29.3403 92.7308 29.5355 92.5355C29.7308 92.3403 29.7308 92.0237 29.5355 91.8284L26.7071 89L29.5355 86.1716C29.7308 85.9763 29.7308 85.6597 29.5355 85.4645C29.3403 85.2692 29.0237 85.2692 28.8284 85.4645L25.6464 88.6464ZM100.354 89.3536C100.549 89.1583 100.549 88.8417 100.354 88.6464L97.1716 85.4645C96.9763 85.2692 96.6597 85.2692 96.4645 85.4645C96.2692 85.6597 96.2692 85.9763 96.4645 86.1716L99.2929 89L96.4645 91.8284C96.2692 92.0237 96.2692 92.3403 96.4645 92.5355C96.6597 92.7308 96.9763 92.7308 97.1716 92.5355L100.354 89.3536ZM26 89.5H100V88.5H26V89.5Z"
            fill="#65AC2D"
          />
        </g>
        <g id="watering-lines">
          <rect
            id="Rectangle 39"
            x="1.25073"
            y="102.806"
            width="23.1321"
            height="13.2588"
            rx={1}
            stroke="white"
            strokeWidth={2}
          />
          <rect
            id="Rectangle 40"
            x="66.208"
            y="123.414"
            width="14.3397"
            height="6.77953"
            rx={1}
            transform="rotate(45 66.208 123.414)"
            stroke="white"
            strokeWidth={2}
          />
          <line
            id="Line 42"
            x1="23.9402"
            y1="110.429"
            x2="406.499"
            y2="110.429"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            id="Line 44"
            x1="111.005"
            y1="283.661"
            x2="406.499"
            y2="283.661"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            id="Line 43"
            x1="111.005"
            y1="110.237"
            x2="111.005"
            y2="349.184"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            id="Line 45"
            x1="211.533"
            y1="46.5088"
            x2="211.533"
            y2="176.85"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            id="Line 47"
            x1="211.533"
            y1="218.843"
            x2="211.533"
            y2="349.184"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            id="Line 46"
            x1="310.266"
            y1="46.5088"
            x2="310.266"
            y2="176.85"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            id="Line 48"
            x1="310.266"
            y1="218.843"
            x2="310.266"
            y2="349.184"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <g id="Component 22">
            <rect
              id="Rectangle 40_2"
              width="6.25179"
              height="23.5846"
              rx="2.1625"
              transform="matrix(0.721979 0.691915 -0.721979 0.691915 116.909 99.1133)"
              fill="white"
            />
            <rect
              id="Rectangle 41"
              width="6.25179"
              height="23.5846"
              rx="2.1625"
              transform="matrix(-0.721979 0.691915 -0.721979 -0.691915 121.423 115.432)"
              fill="white"
            />
            <ellipse
              id="Ellipse 6"
              cx="110.653"
              cy="109.435"
              rx="3.09454"
              ry="2.96568"
              fill="#0E1C03"
            />
          </g>
          {need_perekritie_vodi === "yes" && (
            <g id="perekritie">
              <rect
                id="Rectangle 40_3"
                width="6.25179"
                height="23.5846"
                rx="2.1625"
                transform="matrix(0.721979 0.691915 -0.721979 0.691915 116.909 274)"
                fill="white"
              />
              <rect
                id="Rectangle 41_2"
                width="6.25179"
                height="23.5846"
                rx="2.1625"
                transform="matrix(-0.721979 0.691915 -0.721979 -0.691915 121.423 290.319)"
                fill="white"
              />
              <ellipse
                id="Ellipse 6_2"
                cx="110.653"
                cy="284.322"
                rx="3.09454"
                ry="2.96568"
                fill="#0E1C03"
              />
            </g>
          )}
          <path
            id="Line 56"
            d="M49.8839 110.116L49 109.232L47.2322 111L48.1161 111.884L49.8839 110.116ZM62.1161 125.884C62.6043 126.372 63.3957 126.372 63.8839 125.884C64.372 125.396 64.372 124.604 63.8839 124.116L62.1161 125.884ZM48.1161 111.884L62.1161 125.884L63.8839 124.116L49.8839 110.116L48.1161 111.884Z"
            fill="white"
          />
        </g>
        <g id="rows-number">
          <rect
            id="Rectangle 53"
            x="0.5"
            y="336.5"
            width={94}
            height={26}
            rx={13}
            fill="#0E1C03"
            stroke="#65AC2D"
          />

          <text x="20" y="351" fill="white" id="plant-number-text">
            рядов: {kolvo_ryadov}
          </text>
          <path
            id="Arrow 15"
            d="M76 355L78.8868 350L73.1132 350L76 355ZM75.5 345L75.5 350.5L76.5 350.5L76.5 345L75.5 345Z"
            fill="white"
          />
        </g>
        <g id="plant-number">
          <rect
            id="Rectangle 53_2"
            x="386.5"
            y="188.5"
            width={94}
            height={26}
            rx={13}
            fill="#0E1C03"
            stroke="#65AC2D"
          />

          <text x="398" y="204" fill="white" id="plant-number-text">
            растений: {kolvo_rasteniy}
          </text>
          <path
            id="Arrow 15_2"
            d="M475 202L470 199.113V204.887L475 202ZM465 202.5H470.5V201.5H465V202.5Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};

export default SvgField;
