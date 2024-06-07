let amountRequired = 90

function iWantToGet(amountRequired) {

  let availableNotes = [100, 50, 20, 10, 5]
  let amountResult = []

  for (let i = 0; i < availableNotes.length; i++) {
    let note = availableNotes[i]

    while (amountRequired - note >= 0) {
      amountRequired -= note
      amountResult.push(note)
    }

  }
  return amountResult
}


console.log(iWantToGet(amountRequired))


