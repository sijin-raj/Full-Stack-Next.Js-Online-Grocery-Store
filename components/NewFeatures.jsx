import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex flex-col rounded-[14px] shadow-md bg-white p-4">
    <div
      className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[18px] bg-black`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[20px] leading-[30.24px] text-black">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[14px] text-gray-600 leading-[25px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
