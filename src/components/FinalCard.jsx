import React, { Component } from 'react'
import Draggable from 'react-draggable'
import button from '../../styles/common/button.css';
import styles from '../../styles/editCard.css'
import Card from './Card';

const cards = [
  { picture: 'http://bestanimations.com/Holidays/Birthday/funnybithdaygifs/funny-cat-party-happy-birthday-gif.gif', title: 'Happy birthday Peter! Love having you on my team.', name: 'Your dawg, Aaron', position: { top: '200px', left: '200px'} },
  { picture: 'https://thumbs.gfycat.com/WelltodoBlandChickadee-max-1mb.gif', title: 'SO HAPPY FOR YOU PETER!', name: 'Jenny Sardy', position: { top: '200px', left: '200px'} },
  { picture: 'http://bestanimations.com/Holidays/Birthday/funnybithdaygifs/funny-cat-party-happy-birthday-gif.gif', title: 'Happy birthday Peter! Love having you on my team.', name: 'Your dawg, Aaron', position: { top: '200px', left: '200px'} },
  { picture: 'http://bestanimations.com/Holidays/Birthday/funnybithdaygifs/funny-cat-party-happy-birthday-gif.gif', title: 'Happy birthday Peter! Love having you on my team.', name: 'Your dawg, Aaron', position: { top: '200px', left: '200px'} },
  { picture: 'http://bestanimations.com/Holidays/Birthday/funnybithdaygifs/funny-cat-party-happy-birthday-gif.gif', title: 'Happy birthday Peter! Love having you on my team.', name: 'Your dawg, Aaron', position: { top: '200px', left: '200px'} },
  { picture: 'http://bestanimations.com/Holidays/Birthday/funnybithdaygifs/funny-cat-party-happy-birthday-gif.gif', title: 'Happy birthday Peter! Love having you on my team.', name: 'Your dawg, Aaron', position: { top: '200px', left: '200px'} }

];

class FinalCard extends Component {

  render() {
    return(
      <div className={styles.cupcake}>
        <div className={styles.birthdayHeading}>
        <div className={styles.birthdayTextBox}>
            <h1>Happy Birthday</h1>
            <h1>Peter!</h1>
            <p>xoxo, your friends and family at XO Group</p>
          </div>
          <div>
              {cards.map((card) => <Card key={card.title} src={card.picture} title={card.title} name={card.name} position={card.position} />)}
          </div>
        </div>
        <Card />
      </div>
    )
  }
}

export default FinalCard;

