export default function Card(props) {
  const variants = {
    default: {
      backgroundColor: "bg-color-one",
      fontColor: "text-color-three",
    },
    secondary: {
      backgroundColor: "bg-color-three",
      fontColor: "text-color-two",
    },
  };

  const variant = props.variant || "default";
  const currentVariant = variants[variant];
  return (
    <div
      className={`flex h-[12em] w-[40rem] ${currentVariant.backgroundColor} rounded-3xl`}
    >
      <div className="flex-1 bg-color-three rounded-l-3xl"></div>
      <div
        className={`flex-1 flex justify-center font-three text-[15rem] leading-[12rem] ${currentVariant.fontColor}`}
      >
        {props.year}
      </div>
    </div>
  );
}
