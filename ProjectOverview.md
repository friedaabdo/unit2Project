# unit2Project

# Project Overview

![Alt Text]('https://media.giphy.com/media/3ov9jUCYetT3GVwcy4/giphy.gif')


## Project Links

- [add your github repo link]()
- [add your deployment link]()

## Project Description

This project is React based BlackJack game. I plan to create an interactive game where the player will be able to receive two cards and be able to ask for more to get as close to a sum of 21.

## API

https://deckofcardsapi.com/


```
{
"success": true,
"deck_id": "3t3203555326",
"cards": [
{
"code": "9C",
"image": "https://deckofcardsapi.com/static/img/9C.png",
"images": {
"svg": "https://deckofcardsapi.com/static/img/9C.svg",
"png": "https://deckofcardsapi.com/static/img/9C.png"
},
"value": "9",
"suit": "CLUBS"
},
{
"code": "5D",
"image": "https://deckofcardsapi.com/static/img/5D.png",
"images": {
"svg": "https://deckofcardsapi.com/static/img/5D.svg",
"png": "https://deckofcardsapi.com/static/img/5D.png"
},
"value": "5",
"suit": "DIAMONDS"
}
],
"remaining": 50
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile wireframe](https://res.cloudinary.com/dtsnkndle/image/upload/c_scale,w_641/v1601650684/Unit%202%20Project%20-%20BlackJack/BlackJackWF_ajz1px.jpg)
- [Desktop wireframe](https://res.cloudinary.com/dtsnkndle/image/upload/c_scale,h_600/a_270/v1601650681/Unit%202%20Project%20-%20BlackJack/BlackJackWF2_mwmhet.jpg)
- [Landing page](https://res.cloudinary.com/dtsnkndle/image/upload/c_scale,h_634/a_270/v1601915842/Unit%202%20Project%20-%20BlackJack/Proj2LP_ekr2lt.jpg)
- [add link to your react architecture](https://res.cloudinary.com/dtsnkndle/image/upload/c_scale,w_627/v1601915837/Unit%202%20Project%20-%20BlackJack/Proj2Arch_nyecqj.jpg)


### MVP/PostMVP -

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP
- Find and use external api 
- Render data on page 
- Game logic
- Button functionality

#### PostMVP 

- Add animations
- Add multiplayer functionality
- Add betting
- Add Landing page
- Add a poker game


## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will hold the landing page to both the blackjack game and maybe poker| 
| BlackJack LP | Landing Page to BlackJack game and will have links to rules and game|
| Rules | This will take user to game rules| 
| Table | This will hold all the components and connect the buttons to the game play. It will also pull the data from API | 
| Buttons | This will give the user interactivity with game | 
| Dealer | This will give the user something to play against | 
| Player | This will be the user's cards, which will be connected to the buttons | 
| Hand | This will contain the player's cards and will determine the sum of the cards and the winner | 
| Card | This will add new cards to the hand | 



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Card heirarchy func | H | 3hrs| hrs |
| Dealer rules func | H | 3hrs| hrs |
| Player rules func | H | 3hrs| hrs |
| Set up components | H | 1hrs| hrs |
| Understand API and render | H | 3hrs| 2 hrs |
| Apply rules to API | H | 3hrs| hrs |
| Make the buttons work | H | 3hrs| hrs |
| Set up Router and landing page | M | 1hrs| hrs |
| Card flipping animations | L | 3hrs| hrs |
| Link rules to landing page | L | 1hrs| hrs |
| Adding multiplayer | L | 3hrs| hrs |
| Get multiplayer to work | L | 3hrs| hrs |
| STYLING(mobile) | M | 3hrs| hrs |
| STYLING(desktop) | M | 1hrs| hrs |
| Score counter | L | 2hrs| hrs |




## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
