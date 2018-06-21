import React from 'react';
class Reggae extends React.Component {
  state = {
    artist: ["The Abyssinians",
      "The Aces",
      "Glen Adams",
      "Admiral T",
      "Yasus Afari"]
  }
  render() {
    const s = this.state
    let artistToShow = s.artist.map(a => {
      return <li>{a}</li>
    })
    return (
      <ul>{artistToShow}</ul>
    );
  }
}
export default Reggae;
