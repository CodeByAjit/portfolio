export default function Skills() {
  const skills = ["HTML5","CSS","Javascript","Node.js","React","Git","Github"];

  return (
    <div className="flex gap-6 justify-center text-gray-400 py-4 border-y border-white/10">
      {skills.map((s,i)=><p key={i} className="hover:text-accent cursor-pointer">{s}</p>)}
    </div>
  );
}
