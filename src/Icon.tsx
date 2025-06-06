export type Props = {
  href: string;
  img: string;
};

function Icon(props: Props) {
  const handleError = (e: any) => {
    e.target.src = "/homelab-dashboard/assets/unavailable.svg";
  };

  return (
    <a href={props.href}>
      <div className="bg-zinc-800 hover:bg-zinc-700 rounded-3xl p-5 m-2.5 transition-colors duration-200 ease-in">
        <img
          className="min-w-24 w-24 min-h-24 h-24"
          src={props.img}
          onError={handleError}
        />
      </div>
    </a>
  );
}

export default Icon;
