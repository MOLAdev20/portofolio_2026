export const RightSVG = ({ isMove }: { isMove: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`${isMove ? "transition-transform duration-300 ease-out group-hover:translate-x-2 " : ""}`}
    >
      <path
        d="M9.3 18.7a1 1 0 0 1 0-1.4L13.6 13H4a1 1 0 1 1 0-2h9.6L9.3 6.7a1 1 0 1 1 1.4-1.4l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4 0z"
        fill="currentColor"
      />
    </svg>
  );
};
