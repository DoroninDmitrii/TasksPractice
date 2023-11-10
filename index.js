import express from 'express'
import { averageOfLevels } from './Tree/BFS/AverageBinaryTree.js'

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Server is working on port ${port}`)
})


