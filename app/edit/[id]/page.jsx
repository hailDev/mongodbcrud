export default function EditTopic() {
  return (
    <form action="" className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2 rounded"
        type="text"
        placeholder="name.."
      />
      <input
        className="border border-slate-500 px-8 py-2 rounded"
        type="text"
        placeholder="description.."
      />
      <button className="bg-indigo-950 text-slate-300 font-bold py-2 px-4 w-fit rounded">
        Update
      </button>
    </form>
  );
}
