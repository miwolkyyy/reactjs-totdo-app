function Listbuttons(props) {
  const { tasks, id, move, remove } = props;

  let currentIndex = tasks.findIndex((item) => item.id === id);
  let next = currentIndex + 1;
  let prev = currentIndex - 1;

  return (
    <>
      <div className="flex gap-2.5">
        <button onClick={() => move(currentIndex, prev)} className="text-2xl active:-translate-y-0.5">
          {prev < 0 ? (
            ""
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#D97706">
              <path d="M446.67-328h66.66v-177.33L584-434.67l46.67-46.66L480-632 329.33-481.33 376-434.67l70.67-70.66V-328ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z" />
            </svg>
          )}
        </button>
        <button onClick={() => move(currentIndex, next)} className="text-2xl active:translate-y-0.5">
          {next >= tasks.length ? (
            ""
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#D97706">
              <path d="m480-328 150.67-150.67L584-525.33l-70.67 70.66V-632h-66.66v177.33L376-525.33l-46.67 46.66L480-328Zm0 248q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z" />
            </svg>
          )}
        </button>
        <button onClick={() => remove(id)} className="text-2xl active:scale-95 ">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#999999">
            <path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Listbuttons;
