import inCompleteTodo from "./hooks/todo/inCompleteTodo";
import TodoCard from "./TodoCard";

const InCompleteTodo = async () => {
  const { data, isError } = await inCompleteTodo();

  if (isError) {
    return <div className="text-center text-2xl">Something Went Wrong ! </div>;
  }

  if (data?.length === 0) {
    return (
      <div className="grid h-[90dvh] place-items-center">
        <div className="text-center text-3xl font-bold">
          No InComplete Todo Avableble...🤩🤩
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-5 pt-24 pb-8">
        {data?.map((item) => {
          return <TodoCard key={item.id} tinfo={item} />;
        })}
      </div>
    </>
  );
};

export default InCompleteTodo;
