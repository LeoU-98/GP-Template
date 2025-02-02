import leou from "../images/leou.jpg";
import SideTabs from "./SideNav";

function SideBar() {
  return (
    <section className="basis-1/4 bg-gray-400 px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <img src={leou} alt="leou" className="size-40 rounded-full" />
        <p className="mt-3 text-center text-xl">LeoU</p>
        <p className="text-center text-sm">Agri Expert</p>
        <button className="rounded-lg bg-lima-500 px-3 py-2 text-sm text-white outline-none duration-300 hover:bg-black">
          Upload New Avatar
        </button>
        <p>Bio</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          debitis at quidem fugit aperiam animi impedit odit quia veniam, omnis
        </p>
      </div>
      <SideTabs />
    </section>
  );
}

export default SideBar;
