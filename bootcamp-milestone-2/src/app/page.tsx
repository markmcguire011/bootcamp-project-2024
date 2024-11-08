import Image from "next/image";

export default function Home() {
  return (
    <div className="px-40 py-20 h-screen">
      <h1 className="text-2xl font-bold">About</h1>
      <div className="py-10">
        <div>
          <Image src="/bio.jpeg" alt="bio photo" height={250} width={250} className="rounded"/>
        </div>
        <div>
          <p className="py-2">
            Hi I'm <strong>Mark</strong>, a 2nd year <em>CS major</em>{" "}
            passionate about technology and making an impact. When I'm not
            working on my projects you'll probably find me out on a{" "}
            <strong>run</strong>, playing <strong>basketball</strong>, reading
            up on <strong>history</strong>, or researching my{" "}
            <strong>next project</strong>!
          </p>
          <p className="py-2">
            My biggest areas of interest are <strong>ML/AI</strong>,{" "}
            <strong>embedded systems</strong>, and{" "}
            <strong>full-stack development</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
