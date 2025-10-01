function Input(props) {
  const { setData } = props;
  return (
    <>
      <form onSubmit={setData} className="w-full flex items-center gap-1.5 justify-center mb-4">
        <input name="input" type="text" className="bg-white/55 w-md h-12 pl-1.5  rounded-md text-amber-600 text-xl focus:outline-none font-semibold placeholder:text-amber-600/35" placeholder="what your task?" autoComplete="off" />
        <button className="bg-purple-600 hover:bg-purple-700 px-7 h-12 rounded-md text-amber-400">Add</button>
      </form>
    </>
  );
}

export default Input;
