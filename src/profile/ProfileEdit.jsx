import leou from "../images/leou.jpg";

function ProfileEdit() {
  return (
    <main className="container mx-auto mb-16 mt-5 flex h-96 bg-red-500">
      <section className="bg-green-300 px-5 py-10">
        <img src={leou} alt="leou" className="size-40 rounded-full" />
        <p className="mt-3 text-center">LeoU</p>
      </section>
      <section className="bg-blue-300 px-5 py-10">
        <h2 className="text-3xl">Profile Settings</h2>
      </section>
      <div></div>
    </main>
  );
}

export default ProfileEdit;
