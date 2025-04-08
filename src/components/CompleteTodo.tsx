import completeTodo from "./hooks/todo/completeTodo";
import TodoCard from "./TodoCard";

const CompleteTodo = async () => {
  const { data, isError } = await completeTodo();

  if (isError) {
    return <div className="text-center text-2xl">Something Went Wrong ! </div>;
  }

  if (data?.length === 0) {
    return (
      <div className="grid h-[90dvh] place-items-center">
        <div className="text-center text-3xl font-bold">
          No Complete Todo Avableble...🤩🤩
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

export default CompleteTodo;
