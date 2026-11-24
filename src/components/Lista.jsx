function Lista(props) {
  return (
    <ul>
      {props.itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default Lista