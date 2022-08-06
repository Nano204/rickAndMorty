export default function CharacterCard(props) {
  const { character, showDetail } = props
  const { id, name, image } = character
  return <div>
    <img src={image} alt={`${name}`} />
    <span>{name}</span>
    <button onClick={() => showDetail(id)}>Go</button>
  </div>
}
