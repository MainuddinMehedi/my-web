import { Link } from "react-router-dom";

const HeadingName = () => {
  return (
    <div>
      <div className="w-3/5 flex justify-end items-center">
        <div className="my-12">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-4xl font-extrabold cursor-pointer">
                <Link className="text-[#fff5cfda] underline underline-offset-8 decoration-[#fff5cfda] hover:text-current" to={"/"}>
                  Mainuddin Mehedi
                </Link>
              </h1>
            </div>
            <div className="w-[6.40rem] h-[6.40rem] rounded-full ring box-border">
              <img
                className="rounded-full h-[6.40rem] w-[6.40rem]  object-cover"
                src="/src/assets/images/IMG-20231003-WA0005.jpg"
                alt="my profle"
              />
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
            repellat?
          </p>
          <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
        </div>
      </div>
    </div>
  );
};

export default HeadingName;
