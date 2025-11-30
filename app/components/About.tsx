export default function About() {
  return (
    <section className="max-w-6xl px-6 mx-auto py-20" id="about">

      <h2 className="text-3xl font-bold mb-6">About me</h2>

      <p className="text-gray-300 leading-relaxed mb-10 max-w-3xl">
        I started my software journey from photography. Through that,
        I learned to love the process of creating from scratch. Since then,
        this has led me to software development as it fulfills my love for learning and building things.
      </p>

      <div className="flex gap-12 text-center">
        <Stats number="120+" label="Completed Projects"/>
        <Stats number="95%" label="Client Satisfaction"/>
        <Stats number="10+" label="Years Experience"/>
      </div>
    </section>
  );
}

const Stats = ({ number,label}:{number:string,label:string}) => (
  <div>
    <h3 className="text-accent text-3xl font-bold">{number}</h3>
    <p className="text-gray-400">{label}</p>
  </div>
);
