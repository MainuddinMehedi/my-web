import { Link, Links } from "react-router-dom";

const Greetings = () => {
  return (
    <div className="space-y-7 ">
      <div className="space-y-7">
        <h1 className="font-extrabold text-5xl">Hello and Welcome!</h1>
        <p>
          I'm Mainuddin Mazumder Mehedi, ok, you can call me mehedi or mainu or
          whatever you like. I am a Cricketer, Sociology undergrad and a Web
          Developer who's trying to build his own website.
        </p>
        <p>
          I like to walk like hollywood movie and look like a vigilante, no,
          just kidding.
        </p>
        <p>
          Go to <Link>Now Page</Link> to see what am i working on right now.
        </p>
        <p>
          If you wanna see what book i read, go to <Link>Book Read</Link> page.
        </p>
        <p>
          Basically I post random stuff here, but there are some interesting
          thing here. So <span className="text-[#fff5cff6]">explore..</span>
        </p>
      </div>
      <div className="flex justify-center">
        <div className="py-1 w-24 bg-[#fff5cfda]"></div>
      </div>
    </div>
  );
};

export default Greetings;
