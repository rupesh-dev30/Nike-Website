import Button from "../components/Button";

export default function Subscribe() {
  return (
    <section
      id="contact-us"
      className="flex justify-between items-center max-container max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div>
          <Button label="Sign Up" fullwidth />
        </div>
      </div>
    </section>
  );
}
