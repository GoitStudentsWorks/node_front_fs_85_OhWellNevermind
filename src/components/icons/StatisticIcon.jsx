export const StatisticIcon = ({ width, height, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M6.25 5V23.75C6.25 24.7446 6.64509 25.6984 7.34835 26.4016C8.05161 27.1049 9.00544 27.5 10 27.5H13.75M6.25 5H3.75M6.25 5H33.75M13.75 27.5H26.25M13.75 27.5L12.0833 32.5M33.75 5H36.25M33.75 5V23.75C33.75 24.7446 33.3549 25.6984 32.6516 26.4016C31.9484 27.1049 30.9946 27.5 30 27.5H26.25M26.25 27.5L27.9167 32.5M12.0833 32.5H27.9167M12.0833 32.5L11.25 35M27.9167 32.5L28.75 35M15 18.75V21.25M20 15V21.25M25 11.25V21.25"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
