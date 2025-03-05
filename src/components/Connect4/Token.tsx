/* eslint-disable @typescript-eslint/no-unsafe-function-type */

interface TokenProps {
  color: string;
  onClick: Function;
  value: number
}

const Token: React.FC<TokenProps> = ({
  color,
  onClick,
  value
}) => {

  return (
    <div className="token-container">
      <button
        className="token"
        onClick={() => onClick(value)}
        style={{ '--token-color': color } as React.CSSProperties}      >
      </button>
    </div>
  );
};

export default Token;
