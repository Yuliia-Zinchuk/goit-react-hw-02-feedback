import css from '../Feedback/FeedBack.module.css';
// export const Button = ({ onIncremetGood }) => (
//   <button onClick={onIncremetGood} name="good" className={css.btn}>
//     Good
//   </button>
// );

// export const ButtonItem = ({ friends }) => {
//   return friends.map(({ id, avatar, name, isOnline }) => (
//     <li className={css.item} key={id}>
//       <span className={isOnline ? css.online : css.ofline}></span>
//       <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
//       <p className={css.name}>{name}</p>
//     </li>
//   ));
// };

export const Button = ({ name, type, text, onIncremetGood }) => {
  return (
    <button
      name={name}
      type={type}
      onClick={onIncremetGood}
      className={css.btn}
    >
      {text}
    </button>
  );
};
