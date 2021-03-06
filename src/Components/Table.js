import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import User from "./User";
import Dealer from "./Dealer";
import "./Table.css";

const Table = () => {
  const [deck, setDeck] = useState([]);

  const callingApi = async () => {
    const res = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const info = await res.json();
    setDeck(info);
  };

  useEffect(() => {
    callingApi();
  }, []);

  const deckID = deck.deck_id;

  const fetchShuffle = async () => {
    const res = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`
    );
    const jsonShuffle = await res.json();
  };

  const [userCards, setUserCards] = useState([]);

  const draw1CardUser = async () => {
    const fetchDeck = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
    );
    const jsonDeck = await fetchDeck.json();

    const cardCode = jsonDeck.cards[0].code;

    const fetchPile = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckID}/pile/user/add/?cards=${cardCode}`
    );
    const pileinfo = await fetchPile.json();

    const fetchCard = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckID}/pile/user/list/`
    );
    const handInfo = await fetchCard.json();
    const cardInfo = handInfo.piles.user.cards;
    setUserCards(cardInfo);
  };

  const userCardsArr = userCards.map((card) => {
    return (
      <User
        key={card.code}
        image={card.image}
        value={card.value}
        suit={card.suit}
      />
    );
  });

  const [dealerCards, setDealerCards] = useState([]);

  const draw1CardDealer = async () => {
    const fetchDeck = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
    );
    const jsonDeck = await fetchDeck.json();

    const cardCode = jsonDeck.cards[0].code;

    const fetchPile = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckID}/pile/dealer/add/?cards=${cardCode}`
    );
    const pileinfo = await fetchPile.json();

    const fetchCard = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckID}/pile/dealer/list/`
    );
    const handInfo = await fetchCard.json();
    const cardInfo = handInfo.piles.dealer.cards;
    setDealerCards(cardInfo);
  };

  const dealerCardsArr = dealerCards.map((card) => {
    return (
      <Dealer
        key={card.code}
        image={card.image}
        value={card.value}
        suit={card.suit}
      />
    );
  });

  const dealerValues = () => {
    const dealerValuesArr = dealerCards.map((card) => {
      if (
        card.value === "JACK" ||
        card.value === "QUEEN" ||
        card.value === "KING"
      ) {
        card.value = 10;
      }
      if (card.value === "ACE") {
        card.value = 11;
      }

      return Number(card.value);
    });

    if (dealerValuesArr.length > 0) {
      let counter = 0;

      let isEleven = dealerValuesArr.includes(11);
      dealerValuesArr.forEach((value) => {
        counter += value;
        if (isEleven && counter > 21) {
          counter -= 10;
        }
      });
console.log('counter after reassign',counter)
      return counter;
    }
  };

  const userValues = () => {
    const userValuesArr = userCards.map((card) => {
      if (
        card.value === "JACK" ||
        card.value === "QUEEN" ||
        card.value === "KING"
      ) {
        card.value = 10;
      }
      if (card.value === "ACE") {
        card.value = 11;
      }

      return Number(card.value);
    });

    if (userValuesArr.length > 0) {
      let counter = 0;

      let isEleven = userValuesArr.includes(11);
      userValuesArr.forEach((value) => {
        counter += value;
        if (isEleven && counter > 21) {
          counter -= 10;
        }
      });

      return counter;
    }
  };

  const handleDeal = async () => {
    await fetchShuffle();

    await draw1CardUser();
    await draw1CardDealer();
    await draw1CardUser();
    await draw1CardDealer();
  };



  const [phrase, setPhrase] = useState('Press "Deal" to start');

  const result = () => {
    switch (true) {
      case userValues() === undefined:
        setPhrase('');
        break;
      case userValues() === 21 && dealerValues() === 21:
        setPhrase("BlackJack push!");
        break;
      case userValues() === 21:
        setPhrase("You got BlackJack!");

        break;
      case dealerValues() === 21:
        setPhrase("Aw darn, dealer got blackjack");
        break;
      case userValues() > 21:
        setPhrase("Dang, you busted!");

        break;
      case dealerValues() > 21:
        setPhrase("WOO! dealer busted!");
        break;
      case dealerValues() === userValues():
        setPhrase("You push with the dealer");
        break;
      case userValues() > dealerValues():
        setPhrase("You win!");
        break;
      case userValues() < dealerValues():
        setPhrase("You lose") ;
        break;
      default:
        setPhrase("Whoops, something went wrong");
    }
  };
  // result()

  // setPhrase(result())
  const handleStand = async () => {
    if (await dealerValues() > 16) {
      result();
    } else {
       draw1CardDealer();
       result()
      // if (await dealerValues() > 16) {
      //   result();
      // } else {
      //    draw1CardDealer();
      //   if ( dealerValues() > 16) {
      //     result();
      //   } else {
      //      draw1CardDealer();
      //     result();
      //   }
      // }
    }
  };

  const handleHit = async () => {
    await draw1CardUser();
    if (userValues() >= 21) {
      handleStand();
    }
  };


  return (
    <div className="table">
      <h1>BlackJack</h1>
      <Link to="/">
        <i className="fas fa-home"></i>
      </Link>
      <div className="dealerDiv">
        <p>Dealer</p>
        <p>Cards Total: {dealerValues()}</p>
        <div className="dealerHand">{dealerCardsArr}</div>
      </div>
      <p>{phrase}</p>
      <div className="userDiv">
        <div className="userHand">{userCardsArr}</div>

        <p>Player</p>
        <p>Cards Total: {userValues()}</p>
      </div>

      <Buttons
        handleHit={handleHit}
        handleDeal={handleDeal}
        handleStand={handleStand}
      />
    </div>
  );
};

export default Table;
