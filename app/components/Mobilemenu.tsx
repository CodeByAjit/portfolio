"use client";

export default function MobileMenu({ close, scrollTo }: { close: ()=>void, scrollTo:(id:string)=>void }) {
  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-dark p-6 z-50 text-white">

      <button className="text-3xl mb-6" onClick={close}>×</button>

      <p className="cursor-pointer" onClick={() => { scrollTo("home"); close(); }}>Home</p>
      <p className="cursor-pointer" onClick={() => { scrollTo("about"); close(); }}>About</p>
      <p className="cursor-pointer" onClick={() => { scrollTo("projects"); close(); }}>Projects</p>
      <p className="cursor-pointer" onClick={() => { scrollTo("contact"); close(); }}>Contact</p>

    </div>
  );
}
