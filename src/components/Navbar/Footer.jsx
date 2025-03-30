export default function Footer() {
  return (
    <div className="">
      <div className="w-full bg-green">
        <div className="max-w-[1700px] mx-auto text-sky">
          <div className="flex justify-between py-8">
            <a
              href="/"
              className="text-lg font-bold cursor-pointer hover:text-lime transition duration-200 ease-in-out"
            >
              © 2025 TrainerNext
            </a>
            <div className="flex gap-10">
              <div className="cursor-pointer">Legal Center</div>
              <div>·</div>
              <div className="cursor-pointer">Privacy Policy</div>
              <div>·</div>
              <div className="cursor-pointer">Cookie Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
