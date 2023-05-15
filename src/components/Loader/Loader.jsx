import { MagnifyingGlass } from "react-loader-spinner";


const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{
        justifySelf: "center",
      }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#30D5C8"
    />
  );
};

export { Loader };