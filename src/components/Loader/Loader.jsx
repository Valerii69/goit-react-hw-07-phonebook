import css from './Loader.module.css';
import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      {/* <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#1B365C"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /> */}
      <Bars
        height="80"
        width="80"
        color="#1B365C"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
