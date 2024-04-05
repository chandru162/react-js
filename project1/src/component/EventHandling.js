import MethodProps from "./MethodProps";

const EventHandling = () => {
  function abc(a) {
    console.log(a);
  }

  return (
    <>
      <MethodProps fn={abc} />
    </>
  );
};

export default EventHandling;
