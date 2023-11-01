import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

try {
  const result = await fetch('Yakuzi.txt')
  const text = await result.text()
} catch (err) {
  console.log(err)
}