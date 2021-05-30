//todo: excercise description
const lineTicket = (line) => {
  const cash = {
    twentyfive: 0,
    fifty: 0,
    hundred: 0
  }
  for (let i=0; i<line.length; i++) {
    if (!canGiveChange(line[i], cash))
      return false
    addNote(line[i], cash)
  }
  return true
}

const canGiveChange = (note, cash) => {
  note -= 25
  while (note > 0) {
    if (note >= 50 && cash.fifty) {
      note -= 50
      cash.fifty--
    } else if (cash.twentyfive) {
      note -= 25
      cash.twentyfive--
    } else
      return false
  }
  return true
}

const addNote = (note, cash) => {
  if (note === 25) {
    cash.twentyfive++
  } else if (note === 50) {
    cash.fifty++
  } // 100 not needed
}

console.log(lineTicket([25, 25, 50]))
console.log(lineTicket([25, 100]))
console.log(lineTicket([25, 25, 50, 50, 100]))
