import HeartIcon from "@icons/heart";

interface PickProps {
  li_height: number;
  li_width: number;
  bg_height: number;
  bg_width: number;
  li_color: string;
}

function Pick({
  li_height,
  li_width,
  bg_height,
  bg_width,
  li_color,
}: PickProps) {
  return (
    <div>
      <button
        className={`w-[${bg_width}px] h-[${bg_height}px] bg-gray rounded-xl flex justify-center items-center`}
      >
        <HeartIcon
          color="none"
          width={li_width}
          height={li_height}
          border={li_color}
        />
      </button>
    </div>
  );
}

export default Pick;
