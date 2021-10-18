//steps
/*
-first mistake was not realize i had to create an array of votes for each unique anecdote. 
-Then I had to populate the original useState of the votes hook (need to figure out how to properly articulate this) to be an empty array of the lenght of the anecdotes array
let l = new Array(anc.length).fill(0)
-after createing the array I had to create an event handler for clicking the votes button. this handler would copy the array into a new variable, and update a specific element of that array based on what the current selected anecdote was (incrementing the vote)
-i then displayed the specific element of the votes array whose index corresponded with the selected anecdote
-Extra: finally I made it so that no two anecdotes could repeat, as simply generating a random element could result in repeats. This was done but simply updating the newAnecdote function by adding a conditional to see if the random number genrated was the same index of the anecdotes array that was previously displayed. if so it would loop until the random number was different.

*/

import React, { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]
  const newAnecdote = () => {
    const getRandom = () => {
      return Math.floor(Math.random() * anecdotes.length)
    }
    let randomAnecdote = getRandom()

    while (selected === randomAnecdote) {
      randomAnecdote = getRandom()
      console.log('no repeats!')
    }
    setSelected(randomAnecdote)
  }
  const addVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected]++
    setVotes(copyVotes)
  }

  const [selected, setSelected] = useState(0)
  const emptyVotesArray = new Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(emptyVotesArray)

  return (
    <>
      <div>1.13</div>
      <Button onClick={addVote} text='vote' />
      <Button onClick={newAnecdote} text='next anecdote' />
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
    </>
  )
}

export default App
