export default function Character(props) {
  const { character, navigate } = props;
  const { id, name, image } = character;
  return (
    <div>
      <img src={image} alt={`${name}`} />
      <span>{name}</span>
      <button onClick={() => navigate(id)}>Go</button>
    </div>
  );
}
